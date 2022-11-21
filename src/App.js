import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Map from "react-map-gl";
import { GetApi } from "./configs"
import { FilterColor, PopUp, Menu, SideBar } from "./components";
import "mapbox-gl/dist/mapbox-gl.css";
import { connect } from 'react-redux'

const styles = {
  light: "mapbox://styles/mapbox/outdoors-v9",
  dark: "mapbox://styles/vinoarystio/cl6ttky7b000y14my3f7khdlk",
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popupInfo: null,
      styleId: "light",
      interactiveLayerIds: [],
      cursor: "auto",
      lat: null,
      long: null,
    }
  }

  componentDidMount = () => {
    this.props.GetApi();
  }
  
  onClick = (event) => {
    const feature = event.features && event.features[0];
    if (feature && !this.state.popupInfo) {
      this.setState({ popupInfo: feature });
    } else {
      this.setState({ popupInfo: null });
    }
  }

  setThePopupInfo(value) {
    this.setState((event) => ({ popupInfo: value }));
  }

  setTheStyleId(value) {
    this.setState((event) => ({ styleId: value }));
  }

  setTheInteractiveLayerIds(value) {
    this.setState((event) => ({ interactiveLayerIds: value }))
  }

  onMouseEnter = () => this.setState((event) => ({ cursor: 'pointer' }));
  onMouseLeave = () => this.setState((event) => ({ cursor: 'auto' }));

  render() {
    return (
      <>
        <aside>
          <SideBar list={this.state.interactiveLayerIds} />
        </aside>
        <Map
          style={{ width: "100%", height: "100vh" }}
          mapStyle={styles[this.state.styleId]}
          initialViewState={{
            longitude: 107.608238,
            latitude: -6.914864,
            zoom: 12,
          }}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          cursor={this.state.cursor}
          onClick={this.onClick}
          interactiveLayerIds={this.state.interactiveLayerIds}
          mapboxAccessToken={this.props.token}
        >
          <Routes>
            <Route path="/" element={<FilterColor setInteractiveLayerIds={this.setTheInteractiveLayerIds.bind(this)} />} />
            <Route path="status-merah" element={<FilterColor setInteractiveLayerIds={this.setTheInteractiveLayerIds.bind(this)} color="Merah" />} />
            <Route path="status-hijau" element={<FilterColor setInteractiveLayerIds={this.setTheInteractiveLayerIds.bind(this)} color="Hijau" />} />
            <Route path="status-kuning" element={<FilterColor setInteractiveLayerIds={this.setTheInteractiveLayerIds.bind(this)} color="Kuning" />} />
          </Routes>

          {this.state.popupInfo && (
            <PopUp popupInfo={this.state.popupInfo} setPopupInfo={this.setThePopupInfo.bind(this)} />
          )}

          <Menu setStyleId={this.setTheStyleId.bind(this)} />
        </Map>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { token: state.token.value }
}

export default connect(mapStateToProps, { GetApi })(App)