import React from 'react';

class Books extends React.Component{
    constructor(props){
        super(props);
        this.state = {data:""};
    }

    render(){
        return(
            <>
            <h1>Welcome to Books</h1>
            </>
        );
    }
}

export default Books;