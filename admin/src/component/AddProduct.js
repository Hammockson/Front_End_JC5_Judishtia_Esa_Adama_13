import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

class AddCategory extends Component {
    render() {
        return (

            <div className="main-content">
            <Header />
              <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="largeModalLabel">Add Product</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="row anim-loginbox" style={{marginTop: 50}}>
                      {/* right collum */}
                      <div className="col-md-6">
                        <form className="animico-txt2b">
                          <div>
                            <label htmlFor="country">Category</label>
                            <select className="form-control square" id="country">
                              <option value="tshirt">Tshirt</option>
                              <option value="hoodie">Hoodie</option>
                              <option value="backpack">Backpack</option>
                            </select>
                          </div>
                          <div className="form-group">
                            <label htmlFor="exampleInputName">Product Name</label>
                            <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Product Name" />
                          </div>
                          <div className="form-group">
                            <label htmlFor="exampleInputPrice">Product Price</label>
                            <input type="price" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Price" />
                          </div>   
                        </form>
                      </div>
                      {/* left column */}
                      <div className="col-md-6">
                        <div className="text-center">
                          <img src="images/icon/100.png" className="avatar img-circle" alt="avatar" />
                          <h6 className="animico-txt2">Upload a picture</h6>
                          <input type="file" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                    <Link to="/Products" type="button" className="btn btn-danger">
                        CANCEL
                    </Link>
                    <Link to="#" type="button" className="btn btn-primary">
                        ADD
                    </Link>
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
export default AddCategory;