
import React from 'react';
import Contact from './component/Contact';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
        contact : [
            { name:"test test" , phone:22558899 },
            { name:"test test" , phone:22558899 },
            { name:"test test" , phone:22558899 },
            { name:"test test" , phone:22558899 },
            { name:"test test" , phone:22558899 },
            { name:"test test" , phone:22558899 },
            
        ]
    }


  }



  render(){


    var count = 0;
    return (
      <div>
          
          <ul>
            {
                this.state.contact.map((c)=>{
                    count++;
                    return (
                       <Contact key={count} name={c.name} phone={c.phone} /> 
                    )
                })
            }
          </ul>
      </div>
  
    );
  }

}

export default App;
