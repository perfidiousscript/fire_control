import React, { Component } from "react";
import { scaleLinear } from "d3-scale";
import { select } from "d3-selection";

class Console extends Component {
  constructor() {
    super();
    this.state = {
      location: { x: 100, y: 100 }
    };
    this.createLongRangeRadar = this.createLongRangeRadar.bind(this);
  }
  componentDidMount() {
    this.createLongRangeRadar();
  }

  createLongRangeRadar() {
    const node = this.node;
    const yScale = scaleLinear()
      .domain([-500, 500])
      .range([0, 500]);
    const xScale = scaleLinear()
      .domain([-500, 500])
      .range([0, 500]);

    select(node).append("rect");

    // select(node)
    //   .selectAll("rect")
    //   .attr("width", 500)
    //   .attr("height", 500)
    //   .style("fill", "rgb(33, 54, 51)");
  }

  render() {
    return (
      <svg ref={node => (this.node = node)} width={500} height={500}>
        <defs>
          <linearGradient id="Gradient1" x1="0" x2="1" y1="0" y2="1">
            <stop offset="50%" stop-color="rgb(33, 54, 51)" />
            <stop offset="100%" stop-color="rgb(97, 134, 137)" />
          </linearGradient>
        </defs>

        <rect
          x="0"
          y="0"
          rx="15"
          ry="15"
          width="500"
          height="500"
          fill="url(#Gradient1)"
        />
      </svg>
    );
  }
}

export default Console;
