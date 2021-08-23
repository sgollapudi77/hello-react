import React from 'react';

function HomePage({match}){
    let name = "You";
    if(match.params.name != null)
        name = match.params.name;
    return(
        <>
        <h1>Welcome to homepage</h1>
        <p>Feel free to roam around</p>
        <p>This is about {name}</p>
        </>
    );
}

export default HomePage;