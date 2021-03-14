import logo from './logo.svg';
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home';
import Auth from './Pages/Auth';
import Signup from './Pages/Signup';
import AddNewProduit from './Pages/AddNewProduct';

class App extends React.Component{
  constructor(props){
      super(props);
  }




  render(){
    return(
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/home" component={Home} exact />
          <Route path="/signin" component={Auth} exact />
          <Route path="/signup" component={Signup} exact />
          <Route path="/product/add" component={AddNewProduit} exact />
          
            
          
        </Switch>
    </Router>
    );
  }
}

export default App;
