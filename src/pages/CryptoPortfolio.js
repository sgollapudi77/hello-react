import React from 'react';

class CryptoPortfolio extends React.Component{
    constructor(props){
        super(props);
        this.state = {data:""};
    }

    callAPI() {
        fetch("/api/crypto")
            .then(res => res.text())
            .then(res => this.setState({ data: res }));
    }

    render(){
        this.callAPI();
        return(
            <>
            <h1>Welcome to Crypto</h1>
            <p>Data from API :{this.state.data}</p>
            </>
        );
    }
}

export default CryptoPortfolio;
