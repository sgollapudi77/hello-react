import React from 'react';
import Button from "components/CustomButtons/Button.js";

function Greeting(props){
    return(
        <p>Hello {props.name}</p>
    )
};

function Intro(props){
    return(
        <>
        <h1>Welcome to Intro page</h1>
        <Greeting name = "Vamsi" />
        <Button color="primary">Default</Button> 
        </>
    );
}

export default Intro;