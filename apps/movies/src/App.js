import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Movies from "./pages/Movies";
import Details from "./pages/Details";

export default function App() {
  return (
    <Router>
      <div>

        <Switch>
          <Route path="/" exact component={Movies} /> 
          <Route path="/movies" exact component={Movies}  /> 
          <Route path="/details/:id" exact component={ Details }  /> 
          <Route path="*" component={ NotFound }  /> 
          
        </Switch>
      </div>
    </Router>
  );
}


function NotFound(){
  return (<h1>404 NOT FOUND</h1>);
}