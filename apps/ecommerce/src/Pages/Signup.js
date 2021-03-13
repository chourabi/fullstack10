
import React from 'react';

class Signup extends React.Component{
  constructor(props){
      super(props);
      this.state = {
          username:'',
          pseudo:'',
          password:'',
          confirmPassword:'',
          errMsg:'',
          successMg:''
      }
  }


  createAccount(e){
    e.preventDefault();

    // reacuparation des données + envoie server
    console.log(this.state);

    if (this.state.password !== this.state.confirmPassword) {
        this.setState({
            errMsg:'Passwords are not the same'
        })
    }else{
        

        // appel server

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"username":this.state.username,"pseudo":this.state.pseudo,"password":this.state.password});

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://localhost:3008/auth/signup", requestOptions)
        .then(response => response.text())
        .then((result) => {
            const response = JSON.parse(result);

            if (response.success) {
                
                this.setState({
                    errMsg:'',
                    username:'',
                    password:'',
                    confirmPassword:'',
                    pseudo:'',
                    successMg:response.message
                })

            }else{
                this.setState({
                    errMsg:response.message
                })
            }
        })
        .catch(error => console.log('error', error));




    }

  }





  render(){
    return(
      <div className="container">
          
          <div className="row">
                <div className="col-sm-6 m-auto">
                    <div className="card my-5 ">
                        <div className="card-body">
                            <h3>Create account</h3>
                            <form onSubmit = { (e)=>{ this.createAccount(e) } } >
                                <div className="form-group">
                                    <label>Username</label>
                                    <input value={this.state.username} onChange={ (e)=>{ this.setState({username:e.target.value}) } }  required className="form-control" placeholder="Username..." />
                                </div>
                                <div className="form-group">
                                    <label>Pseudo</label>
                                    <input value={this.state.pseudo} onChange={ (e)=>{ this.setState({pseudo:e.target.value}) } } required className="form-control" placeholder="Username..." />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input value={this.state.password} onChange={ (e)=>{ this.setState({password:e.target.value}) } } required className="form-control" type="password" placeholder="Username..." />
                                </div>
                                <div className="form-group">
                                    <label>Confirm password</label>
                                    <input value={this.state.confirmPassword} onChange={ (e)=>{ this.setState({confirmPassword:e.target.value}) } } required className="form-control" type="password" placeholder="Username..." />
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

                                

                                <div className="form-group">
                                    <button type="submit" className="btn btn-outline-primary btn-block">CREATE NOW</button>
                                </div>
                                
                            </form>
                            
                            
                        </div>
                    </div>
                </div>
          </div>
        
      </div>
    );
  }
}

export default Signup;
