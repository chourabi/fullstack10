import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";

export default class App extends React.Component {

  constructor(props){
    super(props);
  }


  render(){
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/auth" exact component={Auth} />
  
  
          </Switch>
        </div>
      </Router>
    );
  }
}