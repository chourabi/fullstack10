import React from 'react';


class Child extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            name:props.name,
            callParent: props.callParent
        }
    }

    render(){
        console.log(this.state);
        return(
            <div>
                hi i'm the child
                <button onClick={ ()=>{ this.state.callParent() } }>CALL PARENT</button>
            </div>
        );
    }
}

export default Child;