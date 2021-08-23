import './App.css';
import React from "react";

import Books from './pages/Books'
import HomePage from './pages/Homepage';
import Movies from './pages/Movies';
import Crypto from './pages/Crypto';
import CryptoNews from './pages/CryptoNews';
import CryptoAlgo from 'pages/CryptoAlgo';
import CryptoPortfolio from 'pages/CryptoPortfolio';
import Anime from 'pages/Anime';
import OtherAnime from 'pages/OtherAnime';
import Intro from './intro';
import Fandom from 'pages/Fandom';
import FandomMusic from 'pages/FandomMusic';
import FandomSports from 'pages/FandomSports';
import Stocks from './pages/Stocks';
import StocksAlgo from 'pages/StocksAlgo';
import StocksNews from 'pages/StocksNews';
import StocksPortfolio from 'pages/StocksPortfolio';
import Jobs from 'pages/Jobs';
import PreviousJobs from 'pages/PreviousJobs';
import Microsoft from 'pages/Microsoft';
import TvSeries from 'pages/TvSeries';
import OnePiece from 'pages/OnePiece';

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
        <Route path = "/books" component = {Books}/>
        <Route exact path = "/anime" component = {Anime}/>
        <Route path = "/anime/one-piece" component = {OnePiece}/>
        <Route path = "/anime/others" component = {OtherAnime}/>
        <Route exact path = "/crypto" component = {Crypto}/>
        <Route path = "/crypto/news" component = {CryptoNews}/>
        <Route path = "/crypto/algo" component = {CryptoAlgo}/>
        <Route path = "/crypto/portfolio" component = {CryptoPortfolio}/>
        <Route exact path = "/stocks" component = {Stocks}/>
        <Route path = "/stocks/news" component = {StocksNews}/>
        <Route path = "/stocks/algo" component = {StocksAlgo}/>
        <Route path = "/stocks/portfolio" component = {StocksPortfolio}/>
        <Route path = "/movies" component = {Movies}/>
        <Route path = "/tvseries" component = {TvSeries}/>
        <Route exact path = "/jobs" component = {Jobs}/>
        <Route path = "/jobs/others" component = {PreviousJobs}/>
        <Route path = "/jobs/microsoft" component = {Microsoft}/>
        <Route path = "/intro" component = {Intro}/>
        <Route exact path = "/fandom" component = {Fandom}/>
        <Route path = "/fandom/music" component = {FandomMusic}/>
        <Route path = "/fandom/sports" component = {FandomSports}/>
      </Switch>
      </div>
    </div>
    </>
  );
}

export default App;
