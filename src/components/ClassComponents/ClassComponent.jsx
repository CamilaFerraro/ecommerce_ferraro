import { Component } from "react";

class ClassComponent extends Component {
    render () {
        return(
            <div>
                <h2> {this.props.tipoDeAuto} </h2>
            </div>
        );
    }
}

export default ClassComponent;

