import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom';

class Cart extends Component {
    render() {
        return (
            <div>
                <Header />
                
                <div style={{paddingTop: '5%', paddingBottom: '10%'}}>
                    <div className="container">
                        <h3 className="animico-txt5" style={{paddingBottom: 10}}>MY CART<span style={{fontSize: 12}}>/ YOU HAVE 2 ITEMS IN YOUR CART</span></h3>
                    </div>
                    <div className="container">
                        <div className="col-md-12" style={{backgroundColor: '#222', marginBottom: 50}}>
                        <div className="animico-txt3b">
                            <table className=" container table animico-txt3b" style={{fontSize: 12}}>
                            <thead>
                                <tr>
                                <th scope="col">IMAGE</th>
                                <th scope="col">NAME AND TYPE</th>
                                <th scope="col">PRICE</th>
                                <th scope="col">QUANTITY</th>
                                <th scope="col">AMMOUNT</th>
                                <th scope="col">ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row"><img src="img/tshirtmini.jpg" /></th>
                                <td>ANIMICO TSHIRT - OWL SPIRIT</td>
                                <td>IDR 90.000</td>
                                <td>1</td>
                                <td>IDR 90.000</td>
                                <td><a href="/Invoice" className="btn animico-btnc animico-txt5b">REMOVE</a></td>
                                </tr>
                                <tr>
                                <th scope="row"><img src="img/hoodiemini.jpg" /></th>
                                <td>ANIMICO HOODIE - ZEBRA SQUARE</td>
                                <td>IDR 130.000</td>
                                <td>1</td>
                                <td>IDR 130.000</td>
                                <td><a href="/Invoice" className="btn animico-btnc animico-txt5b">REMOVE</a></td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        </div>
                        <div>
                        <div className="col-md-5" style={{backgroundColor: '#222'}}>
                            <div className="col-md-2">
                            <img src="img/shipping-truck--free-transport-icons-10.png" style={{width: 70, height: 70}} />
                            </div>
                            <div className="col-md-10 animico-txt2b">
                            <p style={{fontSize: 10, padding: 30}}>IDR 50.000 SHIPPING CHARGE APPLIED</p>
                            </div>
                        </div>
                        <div className="col-md-1" />
                        <div className="col-md-1" />
                        <div className="col-md-5 animico-txt4b">
                            <div style={{backgroundColor: '#222'}}>
                            <div className="col-md-12" style={{textAlign: 'right', padding: 20, backgroundColor: '#222', marginBottom: 50}}>
                                <table className=" container table animico-txt3b" style={{fontSize: 12}}>
                                <tbody>
                                    <tr>
                                    <td>SUBTOTAL</td>
                                    <td>IDR 220.000</td>
                                    </tr>
                                    <tr>
                                    <td>SHIPPING CHARGE</td>
                                    <td>IDR 50.000</td>
                                    </tr>
                                    <tr>
                                    <td>TOTAL</td>
                                    <td>IDR 270.000</td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                            </div>
                            <div style={{textAlign: 'right'}}>
                            <a href="/Checkout" className="btn animico-btnc animico-txt5b">PROCEED FOR PAYMENT</a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                
                <Footer />
            </div>
        );
    }
}
export default Cart;