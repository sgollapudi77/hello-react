import './App.css';
import React from "react";
import HomePage from './pages/Homepage';
import Intro from './intro';
import {Switch, Route} from "react-router-dom";
import Navbar from './Navbar';

//The component name should start with capital letter
function Hello(props){
  return(
    <div>
      <p>This is the example of components in react.</p>
      <p>This is an example to show the contents of an object using props. {props.version} & {props.message}</p>
    </div>
  );
}

// let city = {
//   name:"Madrid",
//   country:"Spain"
// }

// // ReactDOM.render(<App />, document.getElementById("somerandomId"));

// ReactDOM.render(
//   <div className = "cool-style">
//     <Hello message = "Have fun Reacting" version = {2.3}/>
//     <p>Hey this is another way to write the code instead of using multiple createElement tags. Hello from
//       {city.name} 
//     </p>
//   </div>, document.getElementById('root'));

// ReactDOM.render(
//   React.createElement("h1",{style:{color:"red"}},React.createElement("p",null,"hey"))
//   ,document.getElementById('matter')
// );

function App() {
  return (
    <>
    <div className= "App">
      <Navbar/>
      <div id = "page-body">
      <Switch>
        <Route exact path = "/"><Hello message = "vamsi" version = "2.3"/></Route>
        <Route exact path = "/home" component = {HomePage}/>
        <Route path = "/home/:name" component = {HomePage} />
        <Route path = "/intro" component = {Intro}/>
      </Switch>
      </div>
    </div>
    </>
  );
}

export default App;
