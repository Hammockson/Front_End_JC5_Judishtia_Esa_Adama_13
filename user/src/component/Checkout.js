import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Checkout extends Component {
    render() {
        return (
            <div>
                {/* CONTENT */}
                <div className="container" style={{marginTop: '10%', marginBottom: '10%'}}>
                    <div className="col-md-6" style={{backgroundColor: '#162345', padding: 50}}> 
                        <div className="animico-txt5b" style={{marginBottom: 50}}>
                        <h3>BILLING ADDRESS</h3>
                        </div> 
                        <div className="animico-txt1b">
                        <div className="loginbox" style={{fontSize: 12}}>
                            <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputFirstName1">FIRST NAME*</label>
                                <input type="name" className="form-control" id="exampleInputFirstName1" aria-describedby="emailHelp" placeholder="Enter First Name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputLastName1">LAST NAME*</label>
                                <input type="name" className="form-control" id="exampleInputLastName1" placeholder="Enter Last Name" />
                            </div>
                            <div>
                                <label htmlFor="country">COUNTRY*</label>
                                <select className="form-control" id="country">
                                <option value="usa">United States</option>
                                <option value="uk">United Kingdom</option>
                                <option value="ger">Germany</option>
                                <option value="fra">France</option>
                                <option value="ind">India</option>
                                <option value="aus">Australia</option>
                                <option value="bra">Brazil</option>
                                <option value="cana">Canada</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputCity1">CITY*</label>
                                <input type="text" className="form-control" id="exampleInputCity1" placeholder="Enter City" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputAddress1">ADDRESS*</label>
                                <input type="text" className="form-control" id="exampleInputAddress1" placeholder="Enter Address" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPostcode1">POST CODE*</label>
                                <input type="text" className="form-control" id="exampleInputPostCode1" placeholder="Enter Post Code" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPostcode1">PHONE NUMBER*</label>
                                <input type="number" className="form-control" id="exampleInputPostCode1" placeholder="Enter Phone Number" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPostcode1">EMAIL*</label>
                                <input type="email" className="form-control" id="exampleInputPostCode1" placeholder="Enter Email" />
                            </div>
                            </form>
                        </div>
                        </div> 
                    </div>
                    <div className="col-md-6" style={{padding: 50}}>
                        <div className="animico-txt5" style={{marginBottom: 50}}>
                        <h3>YOUR ORDER</h3>
                        </div>
                        <div className="animico-txt5"> 
                        <p>TOTAL PRICE:</p>
                        <h2>IDR 270.000</h2>
                        </div>
                        <div className="animico-txt2"> 
                        <p>CREDIT CARD INFO</p>
                        </div>
                        <div className="animico-txt3" style={{paddingTop: 50}}>
                        <div className="col-md-8"><input type="name" className="form-control square" id="exampleInputFirstName1" aria-describedby="emailHelp" placeholder="Name" /></div>
                        <div className="col-md-2"><input type="name" className="form-control square" id="exampleInputFirstName1" aria-describedby="emailHelp" placeholder="MM" /></div>
                        <div className="col-md-2"><input type="name" className="form-control square" id="exampleInputFirstName1" aria-describedby="emailHelp" placeholder="YY" /></div>
                        </div>
                        <div style={{marginTop: 60}}>
                        <div className="col-md-10"><input type="name" className="form-control square" id="exampleInputFirstName1" aria-describedby="emailHelp" placeholder="1111 2222 3333 4444" /></div>
                        <div className="col-md-2"><input type="name" className="form-control square" id="exampleInputFirstName1" aria-describedby="emailHelp" placeholder="CVC" /></div>   
                        </div>
                        <div style={{paddingTop: 60, paddingBottom: 60, textAlign: 'center'}}>
                        <Link to="/Invoice" className="btn animico-btn animico-txt5b">CHECKOUT</Link>   
                        </div>
                    </div>
                </div>
                {/* CONTENT END */}
            </div>
        );
    }
}
export default Checkout;