import React, { Component } from "react";

class Input extends Component {
    state = {value:'',
            showValue: '',
    };
    handleChange = (event) => {
        this.setState({value: event.target.value})
    }
    handleClick = ()=>{
        this.setState({showValue: this.state.value});
    }
    render() {
        let {showValue} = this.state;
        return (
            <>
                <input type = "text" onChange = {this.handleChange} />
                <button onClick={this.handleClick}>Add</button>
                <p>{showValue}</p>
            </>
    );
  }
}

export default Input;