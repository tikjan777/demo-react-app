import React from "react";
import Product from './components/Product';
import Input from './components/Input';
import ToDoList from './components/ToDoList';
import ToDo from './components/ToDo';
import Hide from './components/Hide';

function App() {
    
    return (
    <div >
      {/* <Input/>
      <Product name = "Banana" price = "2$" description = "Fresh bananas!"/> */}
      <ToDoList/>
      <Hide />
      <ToDo/>
     </div>
     
  );
}

export default App;