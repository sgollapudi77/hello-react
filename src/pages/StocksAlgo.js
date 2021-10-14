import React from 'react';

class StocksAlgo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:"",
            value:"",
        };
        this.sendData = this.sendData.bind(this);
        this.takeInput = this.takeInput.bind(this);
    }
    
    takeInput(event){
        this.setState({value:event.target.value})
    }

    sendData(event){
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
        return(
            <>
            <div>
                <h1>
                    <small>Stocks Prediction</small>
                </h1>    
                <p>Enter stock symbol to get its predicted price for the next day.
                </p>
            </div>
            <form onSubmit = {this.sendData}>
                <label><h4>Enter stock</h4></label>
                <br/>
                <input style={{height:"24px"}} type="text" value={this.state.value} onChange={this.takeInput}/>
            </form>
            <pre>{this.state.data}</pre>   
            <h6> For example symbol for Microsoft share is MSFT 
                and Apple is AAPL. For any NSE related stocks add ".ns" at the end like "HDFCBANK.NS"
            </h6>
            <h6>We're trying to add the feature where user can see the predicted price at the day he wants
            </h6>         
            </> 
        );
    }
}

export default StocksAlgo;