import React from "react";
import Product from './components/Product';
import Input from './components/Input';

function App() {
    
    return (
      <div >
      <Input/>
      <Product name = "Banana" price = "2$" description = "Fresh bananas!"/>

    </div>

  );
}

export default App;