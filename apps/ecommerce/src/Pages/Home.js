
import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'Loading...',
            connected: false
        }
    }


    getUserInfo() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", localStorage.getItem('shopToken'));

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://localhost:3008/auth/info", requestOptions)
            .then(response => response.json())
            .then((result) => {
                console.log(result);

                this.setState({
                    connected: true,
                    username: result.username
                })
            })
            .catch((err) => {

            });
    }

    componentDidMount() {
        this.getUserInfo();
    }


    logOut(){
        // log out;

        localStorage.clear();
        this.setState({
            connected:false,
            username:''
        })
    }


    render() {
        return (
            <div>

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">SHOP</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to="/home">Home</Link>
                            </li>
                        </ul>
                        <div className="form-inline my-2 my-lg-0 nav-item dropdown" style={{ paddingRight: 70 }}>


                            {
                                this.state.connected === true ?
                                    <div>
                                        
                                        <div>

                                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    {this.state.username}
                                                    </a>
                                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                        <a className="dropdown-item text-danger" onClick={ (e)=>{ e.preventDefault(); this.logOut(); } } >Log out</a>
                                                       
                                                    </div>
                                                    </div>
                                    </div>
                                    :
                                    <div>

                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Account
        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <Link className="dropdown-item" to="/signin">Connexion</Link>
                                            <Link className="dropdown-item" to="/signup">Create an account</Link>
                                        </div>
                                    </div>
                            }

                        </div>
                    </div>
                </nav>











            </div>
        );
    }
}

export default Home;
