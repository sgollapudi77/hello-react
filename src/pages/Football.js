import React from 'react';

class Football extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:"",
            value:""
        };
    }

    render(){
        return(
            <>
            <h1>Welcome to Football</h1>
            </>
        );
    }
}

export default Football;