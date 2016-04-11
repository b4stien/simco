import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

import * as actions from './actions';
import reducer from './reducer';


class SimcoUnconnected extends React.Component {

    render() {
        return (<div style={{width: '80%', margin: 'auto'}}>
            <div style={{display: 'flex', flexDirection: 'row', maxWidth: '600px', margin: 'auto'}}>
                <div style={{flex: 1, padding: '5px'}}>
                    <label style={{display: 'block', marginBottom: '5px'}}>Trajet(s) unique(s)</label>
                    <input
                        min='1'
                        onChange={(e) => { this.props.dispatch({
                            type: actions.CHANGE_UNIQUE_RIDE,
                            uniqueRide: e.target.value
                        }); }}
                        style={{width: '100%'}}
                        type='number'
                        step='1'
                        value={this.props.uniqueRide}
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
                    <button onClick={() => { this.props.dispatch({type: actions.START_COMPUTE}); }} style={{height: '37px', width: '100%'}}>Calculer</button>
                </div>
            </div>
        </div>);
    }

}


const select = (state) => ({
    uniqueRide: state.get('uniqueRide'),
    people: state.get('people'),
    results: state.get('results')
});


const Simco = connect(select)(SimcoUnconnected);


function mountSimcoApp(options) {
    const store = createStore(reducer);

    ReactDOM.render(<Provider store={store}>
        <Simco />
    </Provider>, options.node);
}


window.mountSimcoApp = mountSimcoApp;
