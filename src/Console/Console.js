import React, { Component } from "react";
import { scaleLinear } from "d3-scale";
import { select } from "d3-selection";

class Console extends Component {
  constructor() {
    super();
    this.state = {
      location: [{ x: 100, y: 100 }]
    };
    this.createLongRangeRadar = this.createLongRangeRadar.bind(this);
  }
  componentDidMount() {
    this.createLongRangeRadar();
  }

  createLongRangeRadar() {
    const { location } = this.state;
    const node = this.node;
    const yScale = scaleLinear()
      .domain([-500, 500])
      .range([0, 500]);
    const xScale = scaleLinear()
      .domain([-500, 500])
      .range([0, 500]);

    let screen = select(node)
      .append("g")
      .attr("class", "screen");

    screen
      .append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("rx", 15)
      .attr("ry", 15)
      .attr("width", 500)
      .attr("height", 500)
      .attr("fill", "url(#Gradient1)")
      .attr("class", "field");

    let targets = select(node)
      .append("g")
      .attr("class", "targets");

    targets
      .selectAll("rect")
      .data(location)
      .enter()
      .append("rect");

    targets
      .selectAll("rect")
      .data(location)
      .exit()
      .remove();

    targets
      .selectAll("rect")
      .data(location)
      .style("fill", "#8bb3b2")
      .attr("class", "target")
      .attr("x", function(d) {
        return xScale(d.x);
      })
      .attr("y", function(d) {
        return yScale(d.y);
      })
      .attr("width", 2)
      .attr("height", 2);
  }

  render() {
    return (
      <svg ref={node => (this.node = node)} width={500} height={500}>
        <defs>
          <linearGradient id="Gradient1" x1="0" x2="1" y1="0" y2="1">
            <stop offset="55%" stop-color="rgb(33, 54, 51)" />
            <stop offset="100%" stop-color="rgb(97, 134, 137)" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
}

export default Console;
