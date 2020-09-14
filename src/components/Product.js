import React, { Component } from "react";
import Name from './Name';
import Price from './Price';
import Description from './Description';

class Product extends Component {
    state = {
        showText: true,
        fruits: [
            {
                name: 'Orange',
                weight: 5,
            },
            {
                name: 'Orange',
                weight: 6,
            },
        ],
    };
    toggleText = ()=> {
        this.setState({showText: !this.state.showText})
    }
    render() {
    let {name, price, description} = this.props;
    let {showText} = this.state;
    let fruits = this.state.fruits.map((item, index)=> <p key = {index}>Name: {item.name}, Weight: {item.weight}</p>
    );
    return (
      <div>
        <button onClick={this.toggleText}>
            {
                showText ?
                'Hide' :
                'Show'
            }
        </button>

        {
            showText && <p> Hello, I'm simple text </p> 
        }
        <Name name={name} />        
        <Price price={price} />      
        <Description description={description} />      
        {fruits}
      </div>
    );
  }
}

export default Product;