import React from 'react';

class CryptoPortfolio extends React.Component{
    constructor(props){
        super(props);
        this.state = {data:""};
    }

    render(){
        this.callAPI();
        return(
            <>
            <h1>Welcome to Crypto</h1>
            </>
        );
    }
}

export default CryptoPortfolio;
