import React, { Component } from "react";
import Name from "./ProductComp/Name.js";
import Price from "./ProductComp/Price.js";
import Description from "./ProductComp/Description.js";

class Product extends Component {
  render() {
    return (
      <div>
        <Name name={this.props.name} />
        <Price price={this.props.price} />
        <Description description={this.props.description} />
      </div>
    );
  }
}

export default Product;