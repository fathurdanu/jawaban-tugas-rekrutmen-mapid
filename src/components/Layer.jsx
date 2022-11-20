import React, { Component } from "react";
import Display from './Display';

class Layer extends Component {

  render() {
    const {data} = this.props;
    return (
      <>
        <Display
          title={data.key}
          type="circle"
          data={data}
          color={{
            "circle-color": [
              "match",
              ["get", "Status"],
              "Merah",
              "#FF0000",
              "Hijau",
              "#008000",
              "Kuning",
              "#FFFF00",
              "#1B659D",
            ],
            "circle-radius": ["get", "circle_radius"],
            "circle-stroke-width": ["get", "circle_stroke_width"],
            "circle-stroke-color": ["get", "circle_stroke_color"],
          }}
        />
      </>
    );
  }
}

export default Layer;
