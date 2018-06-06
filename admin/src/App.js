import React, { Component } from 'react';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import Homepage from './component/Homepage';
import Products from './component/Products';
import History from './component/History';
import Invoice from './component/Invoice';
import Login from './component/Login';
import ProductDetail from './component/ProductDetail';
import { Route } from 'react-router-dom';
import './style/css/theme.css';
import './style/css/font-face.css';
import './style/vendor/font-awesome-4.7/css/font-awesome.min.css';
import './style/vendor/font-awesome-5/css/fontawesome-all.min.css';
import './style/vendor/mdi-font/css/material-design-iconic-font.min.css';
import './style/vendor/bootstrap-4.1/bootstrap.min.css';
import './style/vendor/animsition/animsition.min.css';
import './style/vendor/bootstrap-progressbar/bootstrap-progressbar-3.3.4.min.css';
import './style/vendor/wow/animate.css';
import './style/vendor/css-hamburgers/hamburgers.min.css';
import './style/vendor/slick/slick.css';
import './style/vendor/select2/select2.min.css';
import './style/vendor/perfect-scrollbar/perfect-scrollbar.css';



class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <Sidebar />
      <Homepage />
      {/* <Route exact path="/" component={Homepage}/> */}
      <Route exact path="/Homepage" component={Homepage}/>
      <Route path="/Login" component={Login}/>
      <Route path="/Products" component={Products}/>
      <Route path="/History" component={History}/>
      <Route path="/Invoice" component={Invoice}/>
      <Route path="/ProductDetail" component={ProductDetail}/>
      </div>
    );
  }
} export default App;