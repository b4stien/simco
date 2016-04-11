import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

import * as actions from './actions';
import { SimcoGraph } from './graph';
import makeReducer from './reducer';
import SimcoWorker from 'worker!./worker';


class SimcoUnconnected extends React.Component {

    render() {
        return (<div style={{width: '80%', margin: 'auto'}}>
            <div style={{display: 'flex', flexDirection: 'row', maxWidth: '600px', margin: 'auto'}}>
                <div style={{flex: 1, padding: '5px'}}>
                    <label style={{display: 'block', marginBottom: '5px'}}>Trajet(s) unique(s)</label>
                    <input
                        min='1'
                        onChange={(e) => { this.props.dispatch({
                            type: actions.CHANGE_UNIQUE_RIDES,
                            uniqueRides: e.target.value
                        }); }}
                        style={{width: '100%'}}
                        type='number'
                        step='1'
                        value={this.props.uniqueRides}
                    />
                </div>
                <div style={{flex: 1, padding: '5px'}}>
                    <label style={{display: 'block', marginBottom: '5px'}}>Voyageur(s)</label>
                    <input
                        min='1'
                        onChange={(e) => { this.props.dispatch({
                            type: actions.CHANGE_PEOPLE,
                            people: e.target.value
                        }); }}
                        style={{width: '100%'}}
                        type='number'
                        step='1'
                        value={this.props.people}
                    />
                </div>
                <div style={{flex: 1, padding: '5px', display: 'flex', alignItems: 'flex-end'}}>
                    <button
                        disabled={this.props.results.get('isComputing')}
                        onClick={() => { this.props.dispatch({type: actions.START_COMPUTE}); }}
                        style={{height: '37px', width: '100%'}}
                    >
                        Calculer
                    </button>
                </div>
            </div>

            <div style={{maxWidth: '600px', margin: 'auto'}}>
                <p style={{paddingRight: '5px', margin:0, textAlign: 'right', fontSize: '0.8em'}}>
                    <a href="#" onClick={(e) => { e.preventDefault(); this.props.dispatch({type: actions.TOGGLE_ADVANCED}); }}>
                        Réglages avancés
                    </a>
                </p>
                {this.props.advanced.get('shown') ?
                    <div style={{display: 'flex', flexDirection: 'row', fontSize: '0.8em'}}>
                        <div style={{flex: 2}}></div>
                        <div style={{flex: 1, padding: '5px'}}>
                            <label style={{display: 'block', marginBottom: '5px'}}>Passes</label>
                            <input
                                onChange={(e) => { this.props.dispatch({
                                    type: actions.CHANGE_ITERATIONS,
                                    iterations: e.target.value
                                }); }}
                                style={{width: '100%'}}
                                type='number'
                                value={this.props.advanced.get('ITERATIONS')}
                            />
                        </div>
                        <div style={{flex: 1, padding: '5px'}}>
                            <label style={{display: 'block', marginBottom: '5px'}}>Max groupes</label>
                            <input
                                max='30'
                                min='2'
                                onChange={(e) => { this.props.dispatch({
                                    type: actions.CHANGE_MAX_LENGTH,
                                    maxLength: e.target.value
                                }); }}
                                style={{width: '100%'}}
                                type='number'
                                step='1'
                                value={this.props.advanced.get('MAX_LENGTH')}
                            />
                        </div>
                        <div style={{flex: 1, padding: '5px'}}>
                            <label style={{display: 'block', marginBottom: '5px'}}>Trim</label>
                            <select
                                onChange={(e) => { this.props.dispatch({
                                    type: actions.CHANGE_TRIM,
                                    trim: e.target.value
                                }); }}
                                style={{height: '29px'}}
                                value={this.props.advanced.get('TRIM') ? 'true' : 'false'}
                            >
                                <option value={'false'}>Sans</option>
                                <option value={'true'}>Avec</option>
                            </select>
                        </div>
                    </div>
                : null}
            </div>

            {this.props.results.get('hasComputed') ?
                <SimcoGraph results={this.props.results} />
            : null}
        </div>);
    }

}


const select = (state) => ({
    advanced: state.get('advanced'),
    uniqueRides: state.get('uniqueRides'),
    people: state.get('people'),
    results: state.get('results')
});


const Simco = connect(select)(SimcoUnconnected);


function mountSimcoApp(options) {
    const worker = new SimcoWorker();

    const store = createStore(makeReducer(worker));

    worker.onmessage = function(event) {
        store.dispatch({
            type: actions.END_COMPUTE,
            data: event.data.formattedFrequencies
        })
    }

    ReactDOM.render(<Provider store={store}>
        <Simco />
    </Provider>, options.node);
}


window.mountSimcoApp = mountSimcoApp;
