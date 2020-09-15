import React, {Component} from 'react';
import Task from './Task';

class ToDo1 extends React.Component{
    state = {
        value: '',
        arrPerson: [ ]
    }
    ValueFunc = (event)=>{ 

        this.setState({value: event.target.value})
    
    }
    addValue=()=> {
            let {value} =this.state
            let newArr =  this.state.arrPerson
        newArr.push({name: value})

        this.setState({ arrPerson: newArr})
    }  
    render(){
        let {arrPerson} = this.state;
            return (
                <>
                <input type = 'text' onChange = {this.ValueFunc}/>
                <button onClick= {this.addValue} > Add</button>
                <Task arr = {arrPerson}/>
                {arrPerson}
                </>
        )
    }
}
export default ToDo1;