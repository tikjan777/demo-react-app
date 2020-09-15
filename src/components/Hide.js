import React,  {Component} from 'react';

class Hide extends React.Component{
    state = {
        showText: true,
        hideORshow: true,
    };
    toggleText= ()=>{
        this.setState({ showText: !this.state.showText})
        this.setState({ hideORshow: !this.state.hideORshow})
    }
    render(){
        let {showText,hideORshow} = this.state;
        return (
            <>
            <button onClick = {this.toggleText}> {hideORshow ?  'hide': 'show'} </button>
            {  
            showText && <p> Hello!</p> 
            }
            </>   
        )
    }
}
export default Hide;