
import React from 'react';
import { useParams } from 'react-router-dom';

class DeatailsProduct extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        id : props.match.params.id
    }

    console.log(props);
    }



  render(){
     

    return (
      <div className="container">
        
            <h1>we are about  to show details Produit : { this.state.id } </h1>
      </div>
    );
  }
}

export default DeatailsProduct;
