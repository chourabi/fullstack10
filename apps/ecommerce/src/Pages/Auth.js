
import React from 'react';

class Auth extends React.Component{
  constructor(props){
      super(props);
      this.state = {
          username:'',
          password:'',
          errMsg:'',
          successMg:'',
          isLoading: false
      }
  }

  componentDidMount(){
      console.log(this.props);
  }


  createAccount(e){
    e.preventDefault();

    // reacuparation des données + envoie server
    console.log(this.state);

    this.setState({
        isLoading:true
    });

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"username":this.state.username,"password":this.state.password});

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("http://localhost:3008/auth/signin", requestOptions)
    .then(response => response.json())
    .then((result) =>{
        if (result.success) {
            this.setState({
                successMg:'Connected successfully !'
            })

            // save the token to the localstorage
            localStorage.setItem('shopToken',result.token);

            setTimeout(()=>{
                // redicrection home page
                this.props.history.push('/home');
            },2000)
        } else {
            this.setState({
                errMsg:result.message,
                isLoading:false
            })
        }
    })
    .catch(error => console.log('error', error));



  }





  render(){
    return(
      <div className="container">
          
          <div className="row">
                <div className="col-sm-6 m-auto">
                    <div className="card my-5 ">
                        <div className="card-body">
                            <h3>Sign in </h3>
                            <form onSubmit = { (e)=>{ this.createAccount(e) } } >
                                <div className="form-group">
                                    <label>Username</label>
                                    <input value={this.state.username} onChange={ (e)=>{ this.setState({username:e.target.value}) } }  required className="form-control" placeholder="Username..." />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input value={this.state.password} onChange={ (e)=>{ this.setState({password:e.target.value}) } } required className="form-control" type="password" placeholder="Password..." />
                                </div>

                                <div className="form-group">
                                    {
                                        this.state.errMsg !== '' ?
                                        <div className="alert alert-warning">
                                            { this.state.errMsg }
                                        </div>
                                        :
                                        <div></div>

                                    }
                                </div>
                                <div className="form-group">
                                    {
                                        this.state.successMg !== '' ?
                                        <div className="alert alert-success">
                                            { this.state.successMg }
                                        </div>
                                        :
                                        <div></div>

                                    }
                                </div>

                                

                                {
                                    this.state.isLoading === false ?
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-outline-primary btn-block">SIGN IN </button>
                                    </div>:
                                    <div className="form-group">
                                        <div className="spinner-border text-center" role="status">
                                            <span className="sr-only">Loading...</span>
                                            </div>
                                    </div>
                                    
                                }
                                
                            </form>
                            
                            
                        </div>
                    </div>
                </div>
          </div>
        
      </div>
    );
  }
}

export default Auth;
