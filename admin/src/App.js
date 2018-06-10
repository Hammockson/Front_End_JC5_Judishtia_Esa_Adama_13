import React, { Component } from 'react';
import Header from './component/Header';
import Homepage from './component/Homepage';
import Products from './component/Products';
import Historytrans from './component/Historytrans';
import Invoice from './component/Invoice';
import Login from './component/Login';
import ProductDetail from './component/ProductDetail';
import AddCategory from './component/AddCategory';
import AddProduct from './component/AddProduct';
import { Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
      <Route exact path="/Homepage" component={Homepage}/>
      <Route path="/Login" component={Login}/>
      <Route path="/Header" component={Header}/>
      <Route path="/Products" component={Products}/>
      <Route path="/Historytrans" component={Historytrans}/>
      <Route path="/Invoice" component={Invoice}/>
      <Route path="/ProductDetail" component={ProductDetail}/>
      <Route path="/AddCategory" component={AddCategory}/>
      <Route path="/AddProduct" component={AddProduct}/>
      </div>
    );
  }
} export default App;