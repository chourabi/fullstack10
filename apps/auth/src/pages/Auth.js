import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import trad from '../traduction.json';


export default class Auth extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            msgError: ''
        }
    }





    connect() {
        
        console.log("about to connect");
        console.log(this.state);
        const username = this.state.username;
        const password = this.state.password;

        this.setState({
            msgError: ''
        })

        if (username === 'admin' && password === 'admin') {
            localStorage.setItem('token', '123');
            this.props.history.push('/home');
        } else {
            this.setState({
                //msgError: 'Wrong username or password.'
                msgError: trad.errorMSGLogin.fr
            })
        }

    }


    render() {
        return (
            <div>
                <h1>Auth page</h1>
                {

                    this.state.msgError !== '' ? <p> {this.state.msgError} </p> : <div></div>

                }
                <form>
                    <div>
                        <input type="text"
                            placeholder="Username..."
                            value={this.state.username}
                            onChange={(e) => { this.setState({ username: e.target.value }) }}
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Password..."
                            value={this.state.password}
                            onChange={(e) => { this.setState({ password: e.target.value }) }}
                        />
                    </div>

                    <div>
                        <button 
                        onClick={(e) => { e.preventDefault(); this.connect(); }}>CONNECT</button>
                    </div>

                </form>

            </div>
        );
    }
}