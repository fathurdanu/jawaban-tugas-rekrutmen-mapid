import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as cssModule from "../scss";
import { Button } from "./";

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isClickSort: false,
      isDarkMode: false
    }
  }

  clickMode = () => this.setState({ isDarkMode: !this.state.isDarkMode })
  showSort = () => this.setState({ isClickSort: !this.state.isClickSort })

  flipDarkMode = () => {
    this.clickMode();
    this.props.setStyleId(this.state.isDarkMode ? "light" : "dark");
  };

  render() {
    return (
      <div className={cssModule.Components.sortRow}>
        <div
          className={
            this.state.isClickSort
              ? cssModule.Components.sortColor
              : cssModule.Components.sortColorHide
          }
        >
          <Button onclick={() => { this.props.navigate('status-merah') }} title="Merah" />
          <Button onclick={() => { this.props.navigate('status-hijau') }} title="Hijau" />
          <Button onclick={() => { this.props.navigate('status-kuning') }} title="Kuning" />
          <Button onclick={() => { this.props.navigate('/') }} title="Semua" />

        </div>
        <div className={cssModule.Components.sortButton}>
          <Button
            onclick={this.flipDarkMode}
            classname={this.state.isDarkMode ? cssModule.Components.buttonLight : cssModule.Components.buttonDark}
            icon={this.state.isDarkMode ? <FaIcons.FaSun /> : <FaIcons.FaMoon />}
          />
          <Button
            onclick={this.showSort}
            classname={cssModule.Components.buttonSort}
            title="Sortir"
            icon={<FaIcons.FaFilter />}
          />
        </div>

      </div>
    );
  }

}

// supaya bisa pake useNavigate :)
const MenuWithRouter = ({ setStyleId, lat, long }) => {
  const navigate = useNavigate();
  return (
    <Menu setStyleId={setStyleId} navigate={navigate} />
  )
}

export default MenuWithRouter
