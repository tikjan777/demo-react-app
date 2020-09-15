import React, {Component} from 'react';

class ToDoList extends React.Component{
    state = {
        value: '',
        showValue:'',
    };

    handelleCange = (event)=>{
       
        this.setState ({value: event.target.value})
    }
    handelCkick =()=> {
        this.setState({showValue:this.state.value})
     
    } 
      render (){
        let {showValue} =this.state

        return (
            <>
            <input  type = 'text' onChange ={ this.handelleCange}/>
            <button onClick = {this.handelCkick}> Add </button>
            <p> {showValue} </p>
            </>
        )
    }
}
export default ToDoList;