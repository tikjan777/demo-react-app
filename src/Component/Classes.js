import React from 'react';

class User extends React.Component{
    constructor(props) {
        super(props);
        this.state = {address: 'Yeghegnadzor'};
    };

    render(){
        return(
            <div>Hi. I'm {this.props.name}, I'm from {this.state.address}!</div>
        )
    }

};


export default User;