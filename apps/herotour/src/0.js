import logo from './logo.svg';
import './App.css';
import User from './component/User';
import React from 'react';
import LikeBtn from './component/LikeBtn';
import Article from './component/Article';
import Parent from './component/Parent';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      date : new Date(),
      btnClicked : false,
      nbrClick : 0
    }


  }


  clickBtn(){
    this.setState({
      btnClicked : true,
      nbrClick: (this.state.nbrClick +1 )
    });

  }

  render(){

     /*var labelBtn = 'CLICK ME';

     if (this.state.btnClicked === true) {
       labelBtn = "CLICKED "+ this.state.nbrClick +" times";
     }

     <button onClick={ (e)=>{this.clickBtn()} }   > 
        {
          labelBtn
        }
        </button>
        
                <Article nbrLikes={25} didLike={false} />
        <Article nbrLikes={30} didLike={true} />
        <Article nbrLikes={15} didLike={false} />
        
        */
    return (
      <div>
<Parent />
        

      </div>
  
    );
  }

}

export default App;
