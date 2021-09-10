import React from 'react';

class Books extends React.Component{
    constructor(props){
        super(props);
        this.state = {data:""};
    }

    callAPI() {
        fetch("http://localhost:7071/api/test")
            .then(res => res.text())
            .then(res => this.setState({ data: res }));
    }
    
    componentWillMount() {
        this.callAPI();
        console.log(this.state.data);
    }

    render(){
        this.callAPI();
        return(
            <>
            <h1>Welcome to Books</h1>
            <p>Data from API :{this.state.data}</p>
            </>
        );
    }
}

export default Books;