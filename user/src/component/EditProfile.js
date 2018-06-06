import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EditProfile extends Component {
    render() {
        return (
            <div>
                {/* CONTENT */}
                <div className="container" style={{marginTop: 100, marginBottom: 100}}>
                    <div>
                        <Link to="/Profile" className="fa fa-angle-left"><span className="animico-txt1">   BACK TO PROFILE</span></Link>
                    </div>
                    <div style={{textAlign: 'center'}}>
                        <h2 className="animico-txt5" style={{marginBottom: 100}}>EDIT PROFILE</h2>
                    </div>
                    <div className="row " style={{marginTop: 50}}>
                        {/* left column */}
                        <div className="col-md-3">
                        <div className="text-center">
                            <img src="img/100png" className="avatar img-circle" alt="avatar" />
                            <h6 className="animico-txt2">Upload a different photo...</h6>
                            <input type="file" className="form-control" />
                        </div>
                        </div>
                        {/* edit form column */}
                        <div className="col-md-9 personal-info">
                        <form className="form-horizontal animico-txt2" role="form">
                            <div className="form-group">
                            <label className="col-lg-3 control-label">First name:</label>
                            <div className="col-lg-8">
                                <input className="form-control" type="text" defaultValue="Esa" />
                            </div>
                            </div>
                            <div className="form-group">
                            <label className="col-lg-3 control-label">Last name:</label>
                            <div className="col-lg-8">
                                <input className="form-control" type="text" defaultValue="Adama" />
                            </div>
                            </div>
                            <div className="form-group">
                            <label className="col-lg-3 control-label">Company:</label>
                            <div className="col-lg-8">
                                <input className="form-control" type="text" defaultValue />
                            </div>
                            </div>
                            <div className="form-group">
                            <label className="col-lg-3 control-label">Email:</label>
                            <div className="col-lg-8">
                                <input className="form-control" type="text" defaultValue="j.esa.adama@gmail.com" />
                            </div>
                            </div>
                            <div className="form-group">
                            <label className="col-lg-3 control-label">Time Zone:</label>
                            <div className="col-lg-8">
                                <div className="ui-select">
                                <select id="user_time_zone" className="form-control">
                                    <option value="Hawaii">(GMT-10:00) Hawaii</option>
                                    <option value="Alaska">(GMT-09:00) Alaska</option>
                                    <option value="Pacific Time (US & Canada)">(GMT-08:00) Pacific Time (US &amp; Canada)</option>
                                    <option value="Arizona">(GMT-07:00) Arizona</option>
                                    <option value="Mountain Time (US & Canada)">(GMT-07:00) Mountain Time (US &amp; Canada)</option>
                                    <option value="Central Time (US & Canada)" selected="selected">(GMT-06:00) Central Time (US &amp; Canada)</option>
                                    <option value="Eastern Time (US & Canada)">(GMT-05:00) Eastern Time (US &amp; Canada)</option>
                                    <option value="Indiana (East)">(GMT-05:00) Indiana (East)</option>
                                </select>
                                </div>
                            </div>
                            </div>
                            <div className="form-group">
                            <label className="col-md-3 control-label">Username:</label>
                            <div className="col-md-8">
                                <input className="form-control" type="text" defaultValue="esaadama" />
                            </div>
                            </div>
                            <div className="form-group">
                            <label className="col-md-3 control-label">Password:</label>
                            <div className="col-md-8">
                                <input className="form-control" type="password" defaultValue={11111122333} />
                            </div>
                            </div>
                            <div className="form-group">
                            <label className="col-md-3 control-label">Confirm password:</label>
                            <div className="col-md-8">
                                <input className="form-control" type="password" defaultValue={11111122333} />
                            </div>
                            </div>
                            <div className="form-group">
                            <label className="col-md-3 control-label" />
                            <div className="col-md-8">
                                <input type="button" className="btn animico-btnb" defaultValue="Save Changes" />
                                <span />
                                <input type="reset" className="btn btn-default" defaultValue="Cancel" />
                            </div>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
                {/* CONTENT END */}
            </div>
        );
    }
}
export default EditProfile;