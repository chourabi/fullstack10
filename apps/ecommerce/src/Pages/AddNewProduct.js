
import React from 'react';
import { Link } from 'react-router-dom';

class AddNewProduit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            connected: false,
        }
    }


    componentDidMount(){
        if (localStorage.getItem('shopToken')!= null) {
            this.setState({
                connected:true
            })
        }
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
                                                <a className="dropdown-item text-danger" onClick={(e) => { e.preventDefault(); this.logOut(); }} >Log out</a>

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







                <div className="container my-5">
                    

                    
                    {
                        this.state.connected === false ? 
                        <p>
                            <h3>You need to sign in first</h3>
                            <Link to="/signin" className="btn btn-warning">SING IN</Link>
                        </p>:

                            <div>


                                <h3>Add new product</h3>
                               
                               <form action="http://localhost:3008/app/products/add" method="POST" enctype="multipart/form-data" >
                                <div className="form-group">
                                        <label>Title</label>
                                        <input name="title"   required className="form-control" placeholder="Title..." />
                                    </div>
                                    <div className="form-group">
                                        <label>price</label>
                                        <input name="price"   required className="form-control" placeholder="Price..." />
                                    </div>
                                    <div className="form-group">
                                        <label>category</label>
                                        <input name="category"  required className="form-control" placeholder="category..." />
                                    </div>
                                    <div className="form-group">
                                        <label>Photo</label>
                                        <input  className="form-control" name="photo" type="file" accept="image/*"  />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit">ADD PRODUCT</button>
                                    </div>
                                
                                
                               </form>


                                

                                
                                


                            </div>

                    }


                    
                    
                
                </div>
                    









            </div>
        );
    }
}

export default AddNewProduit;
