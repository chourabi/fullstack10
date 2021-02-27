import logo from './logo.svg';
import './App.css';
import React from 'react';
import Product from './component/Product';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';
import DeatailsProduct from './pages/DetailsProduct';

class App extends React.Component {

  constructor(props){
    super(props);
  }



  render(){
    return (
      <Router>
      <div>
        <nav>
          <ul>
            <li>
            <Link to="/">Home</Link>

            </li>

            <li>
            <Link to="/products">products</Link>
              
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/products" exact component={ Products } />
          <Route path="/products/:id" exact component={ DeatailsProduct } />
            


        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
