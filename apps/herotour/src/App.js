import logo from './logo.svg';
import './App.css';
import User from './component/User';
import React from 'react';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      date : new Date()
    }
  }





  render(){
    const users = [
      { username:"test test 1" , email:"test@test.test" },
      { username:"test test 2" , email:"test@test.test" },
      { username:"test test 3" , email:"test@test.test" },
      
    ];

    /**
     * {
          users.map((user)=>{
            return ( <User email={user.email}  username={user.username}   /> );
          })
        }
     */
  
    return (
      <div>
        <h1>{ this.state.date.toString() }</h1>
        
        <button onClick={ ()=>{ this.setState({date: new Date()}) } } >UPDATE DATE</button>
        
      </div>
  
    );
  }

}

export default App;
