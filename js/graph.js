import React from 'react';

import d3 from 'd3';


export class SimcoGraph extends React.Component {

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
