import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router} from "react-router-dom";
import App from './App';

ReactDOM.render(
  <Router>
    <App/>
  </Router>
  , document.getElementById("main")
);
// instead of doing the react create elements, we can write the JSX code (similar to html) 
// and babel transpiles the JSX code in to the format the browser understands