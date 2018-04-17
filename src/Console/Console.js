import React, { Component } from "react";
import { scaleLinear } from "d3-scale";
import { select } from "d3-selection";

class Console extends Component {
  constructor() {
    super();
    this.state = {
      location: [
        { x: -100, y: -100 },
        { x: 50, y: 75 },
        { x: 150, y: 75 },
        { x: 200, y: 300 }
      ],
      sweepPosition: 0
    };
    this.createLongRangeRadar = this.createLongRangeRadar.bind(this);
  }
  componentDidMount() {
    this.sweep();
  }

  sweep() {
    window.setTimeout(() => {
      this.advanceSweep();
      this.createLongRangeRadar();
    }, 3);
  }

  advanceSweep() {
    let newSweep = (this.state.sweepPosition + 1) % 360;
    this.setState(
      {
        sweepPosition: newSweep
      },
      () => {
        this.sweep();
      }
    );
  }

  createLongRangeRadar() {
    const { location, sweepPosition } = this.state;
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
      .append("circle")
      .attr("cx", 250)
      .attr("cy", 250)
      .attr("r", 250)
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
      .attr("opacity", function(d) {
        var opacity = 0;
        let deg = Math.round(Math.atan2(d.x, d.y) * 180 / Math.PI);
        if (deg < 0) {
          deg = deg + 360;
        }
        if (deg < sweepPosition + 10 && deg > sweepPosition - 10) {
          opacity = 1;
        }
        return opacity;
      })
      .attr("class", "target")
      .attr("x", function(d) {
        return xScale(d.x);
      })
      .attr("y", function(d) {
        return yScale(d.y);
      })
      .attr("width", 4)
      .attr("height", 4);
  }

  render() {
    return (
      <svg ref={node => (this.node = node)} width={500} height={500}>
        <defs>
          <linearGradient id="Gradient1" x1="0" x2="1" y1="0" y2="1">
            <stop offset="55%" stopColor="rgb(33, 54, 51)" />
            <stop offset="100%" stopColor="rgb(97, 134, 137)" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
}

export default Console;
