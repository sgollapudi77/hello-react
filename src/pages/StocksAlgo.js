import React from 'react';

class StocksAlgo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:"",
            value:""
        };
        this.sendData = this.sendData.bind(this);
        this.takeInput = this.takeInput.bind(this);
    }

    takeInput(event){
        this.setState({value:event.target.value})
    }

    sendData(event){
        // alert('Submitted '+this.state.value)
        this.callAPI()
        event.preventDefault();
    }

    callAPI() {
    let url = "/api/stock?name="
        url += this.state.value
        fetch(url)
            .then(res => res.text())
            .then(res => this.setState({ data: res }));
    }

    render(){
        this.callAPI();
        return(
            <>
            <h1>Welcome to Stocks data</h1>
            <form onSubmit = {this.sendData}>
                <label>Enter stock</label>
                <br/>
                <input type="text" value={this.state.value} onChange={this.takeInput}/>
            </form>
            <p>Current price of {this.state.value} is {this.state.data}</p>
            <p>New functionality which allows user to input the time frame is also in progress</p>
            </>
        );
    }
}

export default StocksAlgo;