import React, { Component } from 'react'
import * as cssModule from "../scss"
import { connect } from "react-redux";

const colors = {
    "Merah": cssModule.Components.red,
    "Hijau": cssModule.Components.green,
    "Kuning": cssModule.Components.yellow
}

export class SideBar extends Component {
    render() {
        return (
            <div className={cssModule.Components.sidebar}>
                <ul>
                    <li className={cssModule.Components.heading}>Daftar Titik:</li>
                    {this.props.data.map((item, index) =>
                        this.props.list.includes(item.key) &&
                        <li key={index}>
                            {item.properties.Nama}
                            <div className={colors[item.properties.Status]}></div>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { data: state.dataApi.Datas }
}

export default connect(mapStateToProps)(SideBar)