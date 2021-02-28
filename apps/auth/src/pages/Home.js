import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

 class Home extends React.Component {

  constructor(props){
    super(props);

    console.log(props);
  }


  componentDidMount(){
     // test => if user has token => localstorage
     const token = localStorage.getItem('token');
     if (token === null) {
         this.props.history.push('/auth');
     }

  }
  
  logout(){
    localStorage.clear();
    this.props.history.push('/auth');
  }

  render(){
    return (
        <div>
            <h1>Home page</h1>

            <button onClick={ ()=>{ this.logout() } } >LOGOUT</button>
        </div>
    );
  }
}

export default Home;