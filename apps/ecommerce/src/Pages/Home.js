
import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'Loading...',
            connected: false,
            products:[],
            isLoading:true,
            filtredProducts:[],
            qSearch:'',
            checkedCategory:[]
        }
    }



    getProductsList(){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("http://localhost:3008/app/products", requestOptions)
        .then(response => response.json())
        .then((result) =>{
            this.setState({
                isLoading:false,
                products:result.products,
                filtredProducts:result.products,
                
            })
        })
        .catch(error => console.log('error', error));
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
        this.getProductsList();
    }


    logOut() {
        // log out;

        localStorage.clear();
        this.setState({
            connected: false,
            username: ''
        })
    }


    filterSearch(e){
        this.setState({
            qSearch:e.target.value
        })
    }


    updateCheckedCategory(e){
        const checked = e.target.checked;
        const name = e.target.name;
        let tmpChecked = this.state.checkedCategory;

        console.log(tmpChecked.indexOf(name));

        if (tmpChecked.indexOf(name) == -1) {
            tmpChecked.push(name);
        }else{
            tmpChecked.splice(tmpChecked.indexOf(name),1)
        }

        console.log(tmpChecked);

        this.setState({
            checkedCategory : tmpChecked
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
                    <div className="row my-2">
                            <div className="col-sm-12">
                                <Link to="/product/add" className="btn btn-outline-primary">ADD NEW</Link>
                            </div>
                    </div>
                    <div className="row">
                            <div className="col-md-3 col-sm-12  ">

                                    <div className="card">
                                        <div className="card-body">

                                                <div className="form-group">
                                                    <label>Titre</label>
                                                    <input value={this.state.qSearch} onChange={ (e)=>{ this.filterSearch(e) } }  className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <label>TV</label>
                                                    <input type="checkbox" name="TV" onChange={ (e)=>{ this.updateCheckedCategory(e) } } />
                                                    
                                                </div>
                                                <div className="form-group">
                                                    <label>PHONE</label>
                                                    <input type="checkbox" name="PHONE"  onChange={ (e)=>{ this.updateCheckedCategory(e) } }  />
                                                    
                                                </div>
                                                <div className="form-group">
                                                    <label>IT</label>
                                                    <input type="checkbox" name="IT"  onChange={ (e)=>{ this.updateCheckedCategory(e) } }  />
                                                    
                                                </div>
                                                

                                        </div>
                                    </div>

                            </div>
                            <div className="col-md-9 col-sm-12  ">
                                    <div className="card">
                                        <div className="card-body">

                                                
                                                
                                                {
                                                    this.state.isLoading === true ?
                                                    <div className="row">
                                                        <div className="spinner-border m-auto" role="status">
                                                            <span className="sr-only">Loading...</span>
                                                        </div>
                                                    </div>:

                                                        <div className="row">
                                                            {
                                                                this.state.filtredProducts.map((p)=>{
                                                                    
                                                                    if (this.state.checkedCategory.length == 0) {
                                                                        
                                                                        if ( p.title.toLowerCase() .indexOf (this.state.qSearch.toLowerCase()) != -1 ) {
                                                                            return (
                                                                                <div className="col-md-4 col-sm-12">
                                                                                    <div className="card">
                                                                                        <div className="card-body">
                                                                                            <img className="w-100" src={p.photo} />
                                                                                            <h3>{p.title}</h3>
                                                                                            <p>
                                                                                                <strong> {p.price} $</strong> <br />
                                                                                                { p.category }
                                                                                            </p>
                    
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            );
                                                                        }
                                                                    }else{
                                                                        if ( p.title.toLowerCase() .indexOf (this.state.qSearch.toLowerCase()) != -1 ) {
                                                                            if( this.state.checkedCategory.indexOf(p.category) != -1 ){
                                                                                return (
                                                                                    <div className="col-md-4 col-sm-12">
                                                                                        <div className="card">
                                                                                            <div className="card-body">
                                                                                                <img className="w-100" src={p.photo} />
                                                                                                <h3>{p.title}</h3>
                                                                                                <p>
                                                                                                    <strong> {p.price} $</strong> <br />
                                                                                                    { p.category }
                                                                                                </p>
                        
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                );
                                                                            }
                                                                        }
                                                                    }
                                                                    
                                                                })
                                                            }
                                                        </div>


                                                }

                                        </div>
                                    </div>
                            </div>
                            
                    </div>

                </div>











            </div>
        );
    }
}

export default Home;
