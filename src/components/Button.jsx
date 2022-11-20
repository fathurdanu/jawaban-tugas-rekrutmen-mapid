import React, { Component } from "react";

class Button extends Component {

  render() {
    return (
      <button className={this.props.classname} onClick={this.props.onclick}>
        {this.props.icon}
        <p>{this.props.title}</p>
      </button>
    )
  }
}


export default Button
