import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

class Products extends Component {
    render() {
        return (
          <div className="main-content">
          <Header />
            <div className="section__content section__content--p30">
              <div className="container-fluid main-content">
                <div className="row">
                  <div className="col-md-12">
                    <div style={{textAlign: 'center'}}>
                      <h2>PRODUCTS</h2>
                    </div>
                  </div>
                </div>
                <div style={{padding: 40, textAlign: 'center'}}>
                  <Link to="/AddCategory" type="button" className="btn btn-primary">
                    ADD CATEGORY
                  </Link>
                </div>
              </div>
              {/* TSHIRT */}
              <div>
                <div className="container">
                  <div className="row">
                    <div className="col-md-2"> </div>
                    <div className="col-md-8" style={{backgroundColor: '#3e3f3a', color: 'white'}}>
                      <div className="row" style={{padding: 10}}>
                        <div className="col-md-6"><h4 style={{padding: 10}}>TSHIRT</h4></div>
                        <div className="col-md-6" style={{textAlign: 'right'}}>
                          <button className="btn btn-secondary" style={{fontSize: 12}}>RENAME</button>
                          <button className="btn btn-danger" style={{fontSize: 12}}>REMOVE CATEGORY</button>
                        </div>
                      </div>
                      <div>
                        <div>
                          <table className="container table-active" style={{fontSize: 12}}>
                            <thead>
                              <tr>
                                <th scope="col">IMAGE</th>
                                <th scope="col">PRODUCT NAME</th>
                                <th scope="col">PRICE</th>
                                <th scope="col">ACTION</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row"><Link to="Product-Detail.html"><img src="images/icon/tshirt.png" /></Link></th>
                                <td>ANIMICO TSHIRT - OWL SPIRIT</td>
                                <td>IDR 90.000</td>
                                <td><Link to="#" className="btn btn-danger" style={{fontSize: 12}}>REMOVE</Link></td>
                              </tr>
                              <tr>
                                <th scope="row"><Link to="Product-Detail.html"><img src="images/icon/tshirt.png" /></Link></th>
                                <td>ANIMICO TSHIRT - SNAKE MASTER</td>
                                <td>IDR 90.000</td>
                                <td><Link to="#" className="btn btn-danger" style={{fontSize: 12}}>REMOVE</Link></td>
                              </tr>
                              <tr>
                                <th scope="row"><Link to="Product-Detail.html"><img src="images/icon/tshirt.png" /></Link></th>
                                <td>ANIMICO TSHIRT - WHALE MANIA</td>
                                <td>IDR 90.000</td>
                                <td><Link to="#" className="btn btn-danger" style={{fontSize: 12}}>REMOVE</Link></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div style={{padding: 10, textAlign: 'center'}}>
                        <Link to="/AddProduct" type="button" className="btn btn-primary">
                          ADD PRODUCT
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2"> </div>
                </div>
              </div>
              {/* HOODIE */}
              <div style={{paddingTop: 50}}>
                <div className="container">
                  <div className="row">
                    <div className="col-md-2"> </div>
                    <div className="col-md-8" style={{backgroundColor: '#3e3f3a', color: 'white'}}>
                      <div className="row" style={{padding: 10}}>
                        <div className="col-md-6"><h4>HOODIE</h4></div>
                        <div className="col-md-6" style={{textAlign: 'right'}}>
                          <button className="btn btn-secondary" style={{fontSize: 12}}>RENAME</button>
                          <button className="btn btn-danger" style={{fontSize: 12}}>REMOVE CATEGORY</button>
                        </div>
                      </div>
                      <div>
                        <div>
                          <table className=" container table-active" style={{fontSize: 12}}>
                            <thead>
                              <tr>
                                <th scope="col">IMAGE</th>
                                <th scope="col">PRODUCT NAME</th>
                                <th scope="col">PRICE</th>
                                <th scope="col">ACTION</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row"><Link to="Product-Detail.html"><img src="images/icon/hoodie.png" /></Link></th>
                                <td>ANIMICO HOODIE - ZEBRA SQUARE</td>
                                <td>IDR 130.000</td>
                                <td><Link to="#" className="btn btn-danger" style={{fontSize: 12}}>REMOVE</Link></td>
                              </tr>
                              <tr>
                                <th scope="row"><Link to="Product-Detail.html"><img src="images/icon/hoodie.png" /></Link></th>
                                <td>ANIMICO HOODIE - LION PRIDE</td>
                                <td>IDR 130.000</td>
                                <td><Link to="#" className="btn btn-danger" style={{fontSize: 12}}>REMOVE</Link></td>
                              </tr>
                              <tr>
                                <th scope="row"><Link to="Product-Detail.html"><img src="images/icon/hoodie.png" /></Link></th>
                                <td>ANIMICO HOODIE - ELELPHANT FAN</td>
                                <td>IDR 130.000</td>
                                <td><Link to="#" className="btn btn-danger" style={{fontSize: 12}}>REMOVE</Link></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div style={{padding: 10, textAlign: 'center'}}>
                        <Link to="/AddProduct" type="button" className="btn btn-primary">
                          ADD PRODUCT
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-2"> </div>
                  </div>
                </div>
              </div>
              {/* BACKPACK */}
              <div style={{paddingTop: 50}}>
                <div className="container">
                  <div className="row">
                    <div className="col-md-2"> </div>
                    <div className="col-md-8" style={{backgroundColor: '#3e3f3a', color: 'white'}}>
                      <div className="row" style={{padding: 10}}>
                        <div className="col-md-6"><h4>BACKPACK</h4></div>
                        <div className="col-md-6" style={{textAlign: 'right'}}>
                          <button className="btn btn-secondary" style={{fontSize: 12}}>RENAME</button>
                          <button className="btn btn-danger" style={{fontSize: 12}}>REMOVE CATEGORY</button>
                        </div>
                      </div>
                      <div>
                        <div>
                          <table className=" container table-active" style={{fontSize: 12}}>
                            <thead>
                              <tr>
                                <th scope="col">IMAGE</th>
                                <th scope="col">PRODUCT NAME</th>
                                <th scope="col">PRICE</th>
                                <th scope="col">ACTION</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row"><Link to="Product-Detail.html"><img src="images/icon/backpack.png" /></Link></th>
                                <td>ANIMICO BACKPACK - ADVENTURE</td>
                                <td>IDR 330.000</td>
                                <td><Link to="#" className="btn btn-danger" style={{fontSize: 12}}>REMOVE</Link></td>
                              </tr>
                              <tr>
                                <th scope="row"><Link to="Product-Detail.html"><img src="images/icon/backpack.png" /></Link></th>
                                <td>ANIMICO BACKPACK - FRESH</td>
                                <td>IDR 330.000</td>
                                <td><Link to="#" className="btn btn-danger" style={{fontSize: 12}}>REMOVE</Link></td>
                              </tr>
                              <tr>
                                <th scope="row"><Link to="Product-Detail.html"><img src="images/icon/backpack.png" /></Link></th>
                                <td>ANIMICO BACKPACK - ELEGANT</td>
                                <td>IDR 330.000</td>
                                <td><Link to="#" className="btn btn-danger" style={{fontSize: 12}}>REMOVE</Link></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div style={{padding: 10, textAlign: 'center'}}>
                        <Link to="/AddProduct" type="button" className="btn btn-primary">
                          ADD PRODUCT
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-2"> </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12" style={{textAlign: 'center'}}>
              <div className="copyright">
                <p>Copyright © 2018 Animico. All rights reserved.</p>
              </div>
            </div>
          </div>
        
        );
    }
}
export default Products;