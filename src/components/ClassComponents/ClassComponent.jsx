import { Component } from "react";

class ClassComponent extends Component {
    constructor (){
        super();
        this.state = {
            name: 'Camila',
        };
    }

    updateName = () => {
        this.setState({
            name: 'Jazmin'
        })
    };
    render () {
        return (
            <>
              <div onClick={this.updateName}> Actualiza el nombre </div>
            <div>{this.state.name}</div>
            </>
        )
    }
}

export default ClassComponent;

