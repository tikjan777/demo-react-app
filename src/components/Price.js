import React, { Component } from "react";

class Price extends Component {
    constructor(props){
        super(props);
        this.state = {
            price: props.price,
            rate: 487
        };
    }
    changeCurrency = () => {
        let {price, rate} = this.state;
        let sign = price[price.length - 1];

        if(sign === '$') {
            price = parseFloat(price) * rate + '֏';
        } else if(sign === "֏") {
            price = parseFloat(price) / rate + '$';
        }

        this.setState({price})
    }
    render() {
        let {price} = this.state;
        return (
            <p>
                {price}
                <button onClick={this.changeCurrency}>
                    Change Currency
                </button>
            </p>     

    );
  }
}

export default Price;