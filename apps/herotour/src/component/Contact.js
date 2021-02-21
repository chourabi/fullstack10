import React from 'react';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            phone: props.phone
        }
    }

    render() {
        
        return (
            <li >
                

                <div className="alert alert-warning">
                    <h6>{this.state.name}</h6>
                    <p>+216 {this.state.phone}</p>
                </div>
            </li>
        );
    }
}

export default Contact;