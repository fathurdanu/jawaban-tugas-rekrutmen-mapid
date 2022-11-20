import React, { Component } from "react";
import { Popup } from "react-map-gl";
import * as cssModule from "../scss";
import { Card } from "./"

class PopUp extends Component {

  render() {
    return (
      <Popup
        longitude={this.props.popupInfo.geometry.coordinates[0]}
        latitude={this.props.popupInfo.geometry.coordinates[1]}
        onClose={() => this.props.setPopupInfo(null)}
      >
        <div className={cssModule.Components.popUp}>
          <Card title="Nama" desc={this.props.popupInfo.properties.Nama} />
          <Card title="Status" desc={this.props.popupInfo.properties.Status} />
          <Card title="Angka" desc={this.props.popupInfo.properties.Angka} />
        </div>
      </Popup>
    );
  }
}

export default PopUp;
