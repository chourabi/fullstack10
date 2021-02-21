import React from 'react';
import Child from './Child';


class Parent extends React.Component{

    constructor(props){
        super(props);
    }

    callParent(){
        console.log("call from child");
    }

    render(){
        return(
            <div>
                hi i'm the parent

                <Child name= { 'taher' } callParent={this.callParent} />
            </div>
        );
    }
}

export default Parent;