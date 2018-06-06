import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Products extends Component {
    render() {
        return (
            <div>  

                <div className="col-md-3" />
                

                <div className="col-md-9 main-content" style={{marginLeft: 300}}>
                <div>
  <div className="section__content section__content--p30">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div style={{textAlign: 'center'}}>
            <h2>Products</h2>
          </div>
        </div>
      </div>
      {/* TSHIRT */}
      <div style={{paddingTop: 50}}>
        <div className="container">
          <div className="row">
            <div className="col-md-2"> </div>
            <div className="col-md-8" style={{backgroundColor: 'white', padding: 10}}>
              <div className="row">
                <div className="col-md-6"><h4 style={{padding: 10}}>TSHIRT</h4></div>
                <div className="col-md-6" style={{textAlign: 'right'}}>
                  <button className="btn btn-secondary" style={{fontSize: 12}}>RENAME</button>
                  <button className="btn btn-danger" style={{fontSize: 12}}>REMOVE CATEGORY</button>
                </div>
              </div>
              <div>
                <div>
                  <table className=" container table" style={{fontSize: 12}}>
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
                        <th scope="row"><a href="Product-Detail.html"><img src="images/icon/tshirt.png" /></a></th>
                        <td>ANIMICO TSHIRT - OWL SPIRIT</td>
                        <td>IDR 90.000</td>
                        <td><a href="#" className="btn btn-danger" style={{fontSize: 12}}>REMOVE</a></td>
                      </tr>
                      <tr>
                        <th scope="row"><a href="Product-Detail.html"><img src="images/icon/tshirt.png" /></a></th>
                        <td>ANIMICO TSHIRT - SNAKE MASTER</td>
                        <td>IDR 90.000</td>
                        <td><a href="#" className="btn btn-danger" style={{fontSize: 12}}>REMOVE</a></td>
                      </tr>
                      <tr>
                        <th scope="row"><a href="Product-Detail.html"><img src="images/icon/tshirt.png" /></a></th>
                        <td>ANIMICO TSHIRT - WHALE MANIA</td>
                        <td>IDR 90.000</td>
                        <td><a href="#" className="btn btn-danger" style={{fontSize: 12}}>REMOVE</a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="card">
                <div style={{padding: 10, textAlign: 'center'}}>
                  <button type="button" className="au-btn au-btn-icon au-btn--blue mb-1" data-toggle="modal" data-target="#largeModal">
                    ADD PRODUCT
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-2"> </div>
          </div>
        </div>
      </div>
      {/* HOODIE */}
      <div style={{paddingTop: 50}}>
        <div className="container">
          <div className="row">
            <div className="col-md-2"> </div>
            <div className="col-md-8" style={{backgroundColor: 'white', padding: 10}}>
              <div className="row">
                <div className="col-md-6"><h4 style={{padding: 10}}>HOODIE</h4></div>
                <div className="col-md-6" style={{textAlign: 'right'}}>
                  <button className="btn btn-secondary" style={{fontSize: 12}}>RENAME</button>
                  <button className="btn btn-danger" style={{fontSize: 12}}>REMOVE CATEGORY</button>
                </div>
              </div>
              <div>
                <div>
                  <table className=" container table" style={{fontSize: 12}}>
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
                        <th scope="row"><a href="Product-Detail.html"><img src="images/icon/hoodie.png" /></a></th>
                        <td>ANIMICO HOODIE - ZEBRA SQUARE</td>
                        <td>IDR 130.000</td>
                        <td><a href="#" className="btn btn-danger" style={{fontSize: 12}}>REMOVE</a></td>
                      </tr>
                      <tr>
                        <th scope="row"><a href="Product-Detail.html"><img src="images/icon/hoodie.png" /></a></th>
                        <td>ANIMICO HOODIE - LION PRIDE</td>
                        <td>IDR 130.000</td>
                        <td><a href="#" className="btn btn-danger" style={{fontSize: 12}}>REMOVE</a></td>
                      </tr>
                      <tr>
                        <th scope="row"><a href="Product-Detail.html"><img src="images/icon/hoodie.png" /></a></th>
                        <td>ANIMICO HOODIE - ELELPHANT FAN</td>
                        <td>IDR 130.000</td>
                        <td><a href="#" className="btn btn-danger" style={{fontSize: 12}}>REMOVE</a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div style={{padding: 10, textAlign: 'center'}}>
                <button type="button" className="au-btn au-btn-icon au-btn--blue mb-1" data-toggle="modal" data-target="#largeModal">
                  ADD PRODUCT
                </button>
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
            <div className="col-md-8" style={{backgroundColor: 'white', padding: 10}}>
              <div className="row">
                <div className="col-md-6"><h4 style={{padding: 10}}>BACKPACK</h4></div>
                <div className="col-md-6" style={{textAlign: 'right'}}>
                  <button className="btn btn-secondary" style={{fontSize: 12}}>RENAME</button>
                  <button className="btn btn-danger" style={{fontSize: 12}}>REMOVE CATEGORY</button>
                </div>
              </div>
              <div>
                <div>
                  <table className=" container table" style={{fontSize: 12}}>
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
                        <th scope="row"><a href="Product-Detail.html"><img src="images/icon/backpack.png" /></a></th>
                        <td>ANIMICO BACKPACK - ADVENTURE</td>
                        <td>IDR 330.000</td>
                        <td><a href="#" className="btn btn-danger" style={{fontSize: 12}}>REMOVE</a></td>
                      </tr>
                      <tr>
                        <th scope="row"><a href="Product-Detail.html"><img src="images/icon/backpack.png" /></a></th>
                        <td>ANIMICO BACKPACK - FRESH</td>
                        <td>IDR 330.000</td>
                        <td><a href="#" className="btn btn-danger" style={{fontSize: 12}}>REMOVE</a></td>
                      </tr>
                      <tr>
                        <th scope="row"><a href="Product-Detail.html"><img src="images/icon/backpack.png" /></a></th>
                        <td>ANIMICO BACKPACK - ELEGANT</td>
                        <td>IDR 330.000</td>
                        <td><a href="#" className="btn btn-danger" style={{fontSize: 12}}>REMOVE</a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div style={{padding: 10, textAlign: 'center'}}>
                <button type="button" className="au-btn au-btn-icon au-btn--blue mb-1" data-toggle="modal" data-target="#largeModal">
                  ADD PRODUCT
                </button>
              </div>
            </div>
            <div className="col-md-2"> </div>
          </div>
        </div>
      </div>
      <div style={{padding: 40, textAlign: 'center'}}>
        <button type="button" className="btn btn-secondary mb-1" data-toggle="modal" data-target="#smallmodal">
          ADD CATEGORY
        </button>
      </div>
    </div>
    <div className="col-md-12">
      <div className="copyright">
        <p>Copyright © 2018 Animico. All rights reserved.</p>
      </div>
    </div>
  </div>
</div>

                </div>

            </div>
        );
    }
}
export default Products;