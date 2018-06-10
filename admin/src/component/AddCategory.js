import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

class AddCategory extends Component {
    render() {
        return (
            <div className="main-content" style={{marginTop: 100}}>
            <Header />
              <div className="modal-dialog modal-sm" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="smallmodalLabel">Add Category</h5>
                    
                  </div>
                  <div className="modal-body">
                    <div className="form-group">
                      <label htmlFor="exampleInputName">Category Name</label>
                      <input type="text" className="form-control" id="exampleInputCategory" aria-describedby="Category" placeholder="Enter Category Name" />
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