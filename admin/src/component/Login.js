import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
    render() {
        return (
            <div>
  <div className="container-fluid anim-container" style={{marginTop: 90}}>
    <div className="row">
      {/* LEFT */}
      <div className="col-md-4">
      </div>
      {/* MID */}
      <div className="col-12 col-md-4"> 
        {/* FORM */}
        <div style={{textAlign: 'center', padding: 30, color: 'white', fontSize: 30}}>
          <p>ADMIN LOGIN</p>
        </div>
        {/* INPUT */}
        <div className="anim-loginbox">
          <form className="animico-txt2b">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
            </div>
            <div style={{textAlign: 'center'}}>
              <a href="index.html" type="submit" className="btn animico-btn animico-txt3">LOGIN</a>
            </div>
          </form>
        </div>
      </div>
      {/* RIGHT */}
      <div className="col-md-4">
      </div>
    </div>
  </div>
</div>

        );
    }
}
export default Login;