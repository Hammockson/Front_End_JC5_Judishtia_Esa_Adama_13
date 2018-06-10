import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
    render() {
        return (
            
          <div className="row" style={{marginTop: 150}}>
  <div className="col-md-4" />
  <div className="col-md-4" style={{textAlign: 'center'}}>
    <div>
      <h1>ADMIN Login</h1>
    </div>
    <div className="form-group" style={{marginTop: 50}}>
      <label htmlFor="exampleInputEmail1">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div className="form-group">
      <label htmlFor="exampleInputPassword1">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
    </div>
    <Link to="/Homepage" type="button" className="btn btn-primary">
      LOGIN
    </Link>
  </div>
  <div className="col-md-4" />
</div>


        );
    }
}
export default Login;