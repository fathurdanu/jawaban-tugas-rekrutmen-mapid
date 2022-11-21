import { Component } from "react";
import { connect } from "react-redux";
import {Layer} from "./";

class FilterColor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color: this.props.color
        }
    }

    componentDidMount = () => {
        this.setTheInteractiveLayerIds(this.props.color);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.color !== this.props.color) {
            this.setTheInteractiveLayerIds(nextProps.color);
        }
        this.setState({ color: this.props.color});
    }

    setTheInteractiveLayerIds(color) {
        if (color) {
            this.props.setInteractiveLayerIds([...this.props.data?.filter(data => data.properties.Status === color).map(data => data.key)])
        } else {
            this.props.setInteractiveLayerIds([...this.props.data?.map(data => data.key)])
        }
    }

    render() {
        return this.props.data?.map((data, index) => (
            <div key={index}>
                {data.properties.Status === this.props.color || !this.props.color ? (
                    <Layer
                        data={data}
                    />
                ) : null}
            </div>
        ));
    }
}

const mapStateToProps = (state) => {
    return { data: state.dataApi.Datas }
}

export default connect(mapStateToProps)(FilterColor); 