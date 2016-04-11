import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

import d3 from 'd3';

import * as actions from './actions';
import makeReducer from './reducer';
import SimcoWorker from 'worker!./worker';


class SimcoGraph extends React.Component {

    componentDidMount() {
        this.displaySVGChart();
    }

    componentDidUpdate() {
        this.displaySVGChart();
    }

    displaySVGChart() {
        this.refs.svgChart.innerHTML = null;
        let data = this.props.results.get('data');

        var margin = {top: 50, right: 50, bottom: 50, left: 50},
            width = this.refs.svgChart.getBoundingClientRect().width - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;

        var x = d3.scale.ordinal()
            .rangeRoundBands([0, width], .1);

        var y = d3.scale.linear()
            .range([height, 0]);

        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");

        var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left")
            .ticks(10, "%");

        var svg = d3.select(this.refs.svgChart).append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        x.domain(data.map(function(d) { return d.label; }));
        y.domain([0, d3.max(data, function(d) { return d.freq; })]);

        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis)
            .append("text")
            .attr("transform", "translate(" + (width - 100) + ", 30)")
            .text("Trajets partagés");

        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text("Fréquence");

        svg.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function(d) { return x(d.label); })
            .attr("width", x.rangeBand())
            .attr("y", function(d) { return y(d.freq); })
            .attr("height", function(d) { return height - y(d.freq); });
    }

    render() {
        return <div ref='svgChart' style={{marginTop: '50px'}}></div>;
    }

}


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
                    <button onClick={() => { this.props.dispatch({type: actions.START_COMPUTE}); }} style={{height: '37px', width: '100%'}}>Calculer</button>
                </div>
            </div>

            {this.props.results.get('hasComputed') ?
                <SimcoGraph results={this.props.results} />
            : null}
        </div>);
    }

}


const select = (state) => ({
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
