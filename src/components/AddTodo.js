import React, {Component} from 'react';

export default class AddTodo extends Component{

  constructor(props){
    super(props)

    this.state = {
      text : '',

    }
  }

  handleChange = (ev) => {
    this.setState({
      [ev.target.name] : ev.target.value,
    })

  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.handleSubmit(this.state.text);
    this.setState({text : ''})
  }

  shouldComponentUpdate(nextProps, nextState, newxtContext){
    if(this.props.toggle !== nextProps.toggle){
      return false
    }
    return true
  }

  render() {

    // console.log('AddTodo Render')

    return(
      <form className='AddTodo_form' onSubmit={this.handleSubmit}>
        <input name='text'
               placeholder='Enter Todo'
               onChange={this.handleChange}
               value={this.state.text}
               disabled={this.props.disableForm}
        />
        <button 
        onClick={this.handleSubmit}
        disabled={this.props.disableForm}>
        Add
        </button>
      </form>
    )
  }
}