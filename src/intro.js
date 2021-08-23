import React from 'react';

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
        </>
    );
}

export default Intro;