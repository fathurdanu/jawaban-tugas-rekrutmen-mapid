import React, { Component } from "react";
import { Source, Layer as Marker } from "react-map-gl";

class Display extends Component {
  render() {
    const { title, data, color, type } = this.props;
    return (
      <>
        <Source key={title} id={title} type="geojson" data={data} />
        <Marker
          id={title}
          type={type}
          source={title}
          paint={color}
        />
      </>
    );
  }
}

export default Display;
