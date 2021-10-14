import React from 'react';

class StocksAlgo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:"",
            value:""
        };
        this.isSubmit = false;
        this.sendData = this.sendData.bind(this);
        this.takeInput = this.takeInput.bind(this);
    }
    
    takeInput(event){
        this.setState({value:event.target.value})
    }

    sendData(event){
        // alert('Submitted '+this.state.value)
        this.callAPI()
        this.isSubmit = true;
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
        return(
            <>
            <div>
                <h3>
                    <small>Stocks Prediction</small>
                </h3>    
                <p>Enter stock symbol to view its Info. For example symbol for Microsoft share is MSFT
                    and Apple is AAPL. For any NSE related stocks add ".ns" at the end like "HDFCBANK.NS"
                </p>
            </div>
            <form onSubmit = {this.sendData}>
                <label>Enter stock</label>
                <br/>
                <input type="text" value={this.state.value} onChange={this.takeInput}/>
            </form>
            <p>Current price of {this.state.value} is {this.state.data}</p>            
            </> 
        );
    }
}

export default StocksAlgo;