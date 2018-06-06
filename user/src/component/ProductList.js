import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class productList extends Component {
    render() {
        return (
            <div>
                {/* CONTENT */}
                <div className="container" style={{paddingBottom: 100, paddingTop: 100}}>
                    <div>
                        <ul className="col-md-2 nav anim-nav-pills nav-stacked animico-txt2 shadow" style={{backgroundColor: '#dddddd'}}>
                        <li className="active"><Link to="#tshirt" data-toggle="pill">Tshirt</Link></li>
                        <li><Link to="#hoodie" data-toggle="pill">Hoodie</Link></li>
                        <li><Link to="#backpack" data-toggle="pill">Backpack</Link></li>
                        </ul>
                        <div>
                        </div>    
                    </div>
                    <div className="tab-content col-md-10">
                        <div className="tab-pane active" id="tshirt">
                        <div>
                            <div className="col-sm-3" style={{padding: 10, border: '6px solid #ffffff', backgroundColor: '#dddddd'}}>
                            <div className="product-image-wrapper" style={{padding: 10}}>
                                <div className="single-products">
                                <div className="productinfo text-center" style={{padding: 10}}>
                                    <Link to="/ProductDetail">
                                    <img src="img/Products/Product Detail/Whale Tshirt Fix.png" alt />
                                    <h6>IDR 90.000</h6>
                                    <p>Easy Polo Black Edition</p>
                                    </Link>
                                    <Link to="#" className="btn animico-btnc animico-txt5">Add to cart</Link>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-3" style={{padding: 10, border: '6px solid #ffffff', backgroundColor: '#dddddd'}}>
                            <div className="product-image-wrapper" style={{padding: 10}}>
                                <div className="single-products">
                                <div className="productinfo text-center" style={{padding: 10}}>
                                    <Link to="/ProductDetail">
                                    <img src="img/Products/Product Detail/Whale Tshirt Fix.png" alt />
                                    <h6>IDR 90.000</h6>
                                    <p>Easy Polo Black Edition</p>
                                    </Link>
                                    <Link to="#" className="btn animico-btnc animico-txt5">Add to cart</Link>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-3" style={{padding: 10, border: '6px solid #ffffff', backgroundColor: '#dddddd'}}>
                            <div className="product-image-wrapper" style={{padding: 10}}>
                                <div className="single-products">
                                <div className="productinfo text-center" style={{padding: 10}}>
                                    <Link to="/ProductDetail">
                                    <img src="img/Products/Product Detail/Whale Tshirt Fix.png" alt />
                                    <h6>IDR 90.000</h6>
                                    <p>Easy Polo Black Edition</p>
                                    </Link>
                                    <Link to="/ProductDetail" className="btn animico-btnc animico-txt5">Add to cart</Link>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-3" style={{padding: 10, border: '6px solid #ffffff', backgroundColor: '#dddddd'}}>
                            <div className="product-image-wrapper" style={{padding: 10}}> 
                                <div className="single-products">
                                <div className="productinfo text-center" style={{padding: 10}}>
                                    <Link to="/ProductDetail">
                                    <img src="img/Products/Product Detail/Whale Tshirt Fix.png" alt />
                                    <h6>IDR 90.000</h6>
                                    <p>Easy Polo Black Edition</p>
                                    </Link>
                                    <Link to="/ProductDetail" className="btn animico-btnc animico-txt5">Add to cart</Link>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div>
                            <div className="col-sm-3" style={{padding: 10, border: '6px solid #ffffff', backgroundColor: '#dddddd'}}>
                            <div className="product-image-wrapper" style={{padding: 10}}>
                                <div className="single-products">
                                <div className="productinfo text-center" style={{padding: 10}}>
                                    <Link to="/ProductDetail">
                                    <img src="img/Products/Product Detail/Whale Tshirt Fix.png" alt />
                                    <h6>IDR 90.000</h6>
                                    <p>Easy Polo Black Edition</p>
                                    </Link>
                                    <Link to="#" className="btn animico-btnc animico-txt5">Add to cart</Link>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-3" style={{padding: 10, border: '6px solid #ffffff', backgroundColor: '#dddddd'}}>
                            <div className="product-image-wrapper" style={{padding: 10}}>
                                <div className="single-products">
                                <div className="productinfo text-center" style={{padding: 10}}>
                                    <Link to="/ProductDetail">
                                    <img src="img/Products/Product Detail/Whale Tshirt Fix.png" alt />
                                    <h6>IDR 90.000</h6>
                                    <p>Easy Polo Black Edition</p>
                                    </Link>
                                    <Link to="#" className="btn animico-btnc animico-txt5">Add to cart</Link>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-3" style={{padding: 10, border: '6px solid #ffffff', backgroundColor: '#dddddd'}}>
                            <div className="product-image-wrapper" style={{padding: 10}}>
                                <div className="single-products">
                                <div className="productinfo text-center" style={{padding: 10}}>
                                    <Link to="/ProductDetail">
                                    <img src="img/Products/Product Detail/Whale Tshirt Fix.png" alt />
                                    <h6>IDR 90.000</h6>
                                    <p>Easy Polo Black Edition</p>
                                    </Link>
                                    <Link to="/ProductDetail" className="btn animico-btnc animico-txt5">Add to cart</Link>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-3" style={{padding: 10, border: '6px solid #ffffff', backgroundColor: '#dddddd'}}>
                            <div className="product-image-wrapper" style={{padding: 10}}> 
                                <div className="single-products">
                                <div className="productinfo text-center" style={{padding: 10}}>
                                    <Link to="/ProductDetail">
                                    <img src="img/Products/Product Detail/Whale Tshirt Fix.png" alt />
                                    <h6>IDR 90.000</h6>
                                    <p>Easy Polo Black Edition</p>
                                    </Link>
                                    <Link to="/ProductDetail" className="btn animico-btnc animico-txt5">Add to cart</Link>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="tab-pane" id="hoodie">
                        <div>
                            <div className="col-sm-3" style={{padding: 10, border: '6px solid #ffffff', backgroundColor: '#dddddd'}}>
                            <div className="product-image-wrapper" style={{padding: 10}}>
                                <div className="single-products">
                                <div className="productinfo text-center" style={{padding: 10}}>
                                    <Link to="/ProductDetail">
                                    <img src="img/Products/Product Detail/Hoodie-Zebra.png" alt />
                                    <h6>IDR 90.000</h6>
                                    <p>Easy Polo Black Edition</p>
                                    </Link>
                                    <Link to="#" className="btn animico-btnc animico-txt5">Add to cart</Link>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-3" style={{padding: 10, border: '6px solid #ffffff', backgroundColor: '#dddddd'}}>
                            <div className="product-image-wrapper" style={{padding: 10}}>
                                <div className="single-products">
                                <div className="productinfo text-center" style={{padding: 10}}>
                                    <Link to="/ProductDetail">
                                    <img src="img/Products/Product Detail/Hoodie-Zebra.png" alt />
                                    <h6>IDR 90.000</h6>
                                    <p>Easy Polo Black Edition</p>
                                    </Link>
                                    <Link to="#" className="btn animico-btnc animico-txt5">Add to cart</Link>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-3" style={{padding: 10, border: '6px solid #ffffff', backgroundColor: '#dddddd'}}>
                            <div className="product-image-wrapper" style={{padding: 10}}>
                                <div className="single-products">
                                <div className="productinfo text-center" style={{padding: 10}}>
                                    <Link to="/ProductDetail">
                                    <img src="img/Products/Product Detail/Hoodie-Zebra.png" alt />
                                    <h6>IDR 90.000</h6>
                                    <p>Easy Polo Black Edition</p>
                                    </Link>
                                    <Link to="/ProductDetail" className="btn animico-btnc animico-txt5">Add to cart</Link>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-3" style={{padding: 10, border: '6px solid #ffffff', backgroundColor: '#dddddd'}}>
                            <div className="product-image-wrapper" style={{padding: 10}}> 
                                <div className="single-products">
                                <div className="productinfo text-center" style={{padding: 10}}>
                                    <Link to="/ProductDetail">
                                    <img src="img/Products/Product Detail/Hoodie-Zebra.png" alt />
                                    <h6>IDR 90.000</h6>
                                    <p>Easy Polo Black Edition</p>
                                    </Link>
                                    <Link to="/ProductDetail" className="btn animico-btnc animico-txt5">Add to cart</Link>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div>
                            <div className="col-sm-3" style={{padding: 10, border: '6px solid #ffffff', backgroundColor: '#dddddd'}}>
                            <div className="product-image-wrapper" style={{padding: 10}}>
                                <div className="single-products">
                                <div className="productinfo text-center" style={{padding: 10}}>
                                    <Link to="/ProductDetail">
                                    <img src="img/Products/Product Detail/Hoodie-Zebra.png" alt />
                                    <h6>IDR 90.000</h6>
                                    <p>Easy Polo Black Edition</p>
                                    </Link>
                                    <Link to="#" className="btn animico-btnc animico-txt5">Add to cart</Link>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-3" style={{padding: 10, border: '6px solid #ffffff', backgroundColor: '#dddddd'}}>
                            <div className="product-image-wrapper" style={{padding: 10}}>
                                <div className="single-products">
                                <div className="productinfo text-center" style={{padding: 10}}>
                                    <Link to="/ProductDetail">
                                    <img src="img/Products/Product Detail/Hoodie-Zebra.png" alt />
                                    <h6>IDR 90.000</h6>
                                    <p>Easy Polo Black Edition</p>
                                    </Link>
                                    <Link to="#" className="btn animico-btnc animico-txt5">Add to cart</Link>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-3" style={{padding: 10, border: '6px solid #ffffff', backgroundColor: '#dddddd'}}>
                            <div className="product-image-wrapper" style={{padding: 10}}>
                                <div className="single-products">
                                <div className="productinfo text-center" style={{padding: 10}}>
                                    <Link to="/ProductDetail">
                                    <img src="img/Products/Product Detail/Hoodie-Zebra.png" alt />
                                    <h6>IDR 90.000</h6>
                                    <p>Easy Polo Black Edition</p>
                                    </Link>
                                    <Link to="/ProductDetail" className="btn animico-btnc animico-txt5">Add to cart</Link>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-3" style={{padding: 10, border: '6px solid #ffffff', backgroundColor: '#dddddd'}}>
                            <div className="product-image-wrapper" style={{padding: 10}}> 
                                <div className="single-products">
                                <div className="productinfo text-center" style={{padding: 10}}>
                                    <Link to="/ProductDetail">
                                    <img src="img/Products/Product Detail/Hoodie-Zebra.png" alt />
                                    <h6>IDR 90.000</h6>
                                    <p>Easy Polo Black Edition</p>
                                    </Link>
                                    <Link to="/ProductDetail" className="btn animico-btnc animico-txt5">Add to cart</Link>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="tab-pane" id="backpack">
                        <div>
                            <div className="col-sm-3" style={{padding: 10, border: '6px solid #ffffff', backgroundColor: '#dddddd'}}>
                            <div className="product-image-wrapper" style={{padding: 10}}>
                                <div className="single-products">
                                <div className="productinfo text-center" style={{padding: 10}}>
                                    <Link to="/ProductDetail">
                                    <img src="img/Products/Product Detail/Backpack Pink.png" alt />
                                    <h6>IDR 90.000</h6>
                                    <p>Easy Polo Black Edition</p>
                                    </Link>
                                    <Link to="#" className="btn animico-btnc animico-txt5">Add to cart</Link>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-3" style={{padding: 10, border: '6px solid #ffffff', backgroundColor: '#dddddd'}}>
                            <div className="product-image-wrapper" style={{padding: 10}}>
                                <div className="single-products">
                                <div className="productinfo text-center" style={{padding: 10}}>
                                    <Link to="/ProductDetail">
                                    <img src="img/Products/Product Detail/Backpack Pink.png" alt />
                                    <h6>IDR 90.000</h6>
                                    <p>Easy Polo Black Edition</p>
                                    </Link>
                                    <Link to="#" className="btn animico-btnc animico-txt5">Add to cart</Link>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-3" style={{padding: 10, border: '6px solid #ffffff', backgroundColor: '#dddddd'}}>
                            <div className="product-image-wrapper" style={{padding: 10}}>
                                <div className="single-products">
                                <div className="productinfo text-center" style={{padding: 10}}>
                                    <Link to="/ProductDetail">
                                    <img src="img/Products/Product Detail/Backpack Pink.png" alt />
                                    <h6>IDR 90.000</h6>
                                    <p>Easy Polo Black Edition</p>
                                    </Link>
                                    <Link to="/ProductDetail" className="btn animico-btnc animico-txt5">Add to cart</Link>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-3" style={{padding: 10, border: '6px solid #ffffff', backgroundColor: '#dddddd'}}>
                            <div className="product-image-wrapper" style={{padding: 10}}> 
                                <div className="single-products">
                                <div className="productinfo text-center" style={{padding: 10}}>
                                    <Link to="/ProductDetail">
                                    <img src="img/Products/Product Detail/Backpack Pink.png" alt />
                                    <h6>IDR 90.000</h6>
                                    <p>Easy Polo Black Edition</p>
                                    </Link>
                                    <Link to="/ProductDetail" className="btn animico-btnc animico-txt5">Add to cart</Link>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div>
                            <div className="col-sm-3" style={{padding: 10, border: '6px solid #ffffff', backgroundColor: '#dddddd'}}>
                            <div className="product-image-wrapper" style={{padding: 10}}>
                                <div className="single-products">
                                <div className="productinfo text-center" style={{padding: 10}}>
                                    <Link to="/ProductDetail">
                                    <img src="img/Products/Product Detail/Backpack Pink.png" alt />
                                    <h6>IDR 90.000</h6>
                                    <p>Easy Polo Black Edition</p>
                                    </Link>
                                    <Link to="#" className="btn animico-btnc animico-txt5">Add to cart</Link>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-3" style={{padding: 10, border: '6px solid #ffffff', backgroundColor: '#dddddd'}}>
                            <div className="product-image-wrapper" style={{padding: 10}}>
                                <div className="single-products">
                                <div className="productinfo text-center" style={{padding: 10}}>
                                    <Link to="/ProductDetail">
                                    <img src="img/Products/Product Detail/Backpack Pink.png" alt />
                                    <h6>IDR 90.000</h6>
                                    <p>Easy Polo Black Edition</p>
                                    </Link>
                                    <Link to="#" className="btn animico-btnc animico-txt5">Add to cart</Link>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-3" style={{padding: 10, border: '6px solid #ffffff', backgroundColor: '#dddddd'}}>
                            <div className="product-image-wrapper" style={{padding: 10}}>
                                <div className="single-products">
                                <div className="productinfo text-center" style={{padding: 10}}>
                                    <Link to="/ProductDetail">
                                    <img src="img/Products/Product Detail/Backpack Pink.png" alt />
                                    <h6>IDR 90.000</h6>
                                    <p>Easy Polo Black Edition</p>
                                    </Link>
                                    <Link to="/ProductDetail" className="btn animico-btnc animico-txt5">Add to cart</Link>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-3" style={{padding: 10, border: '6px solid #ffffff', backgroundColor: '#dddddd'}}>
                            <div className="product-image-wrapper" style={{padding: 10}}> 
                                <div className="single-products">
                                <div className="productinfo text-center" style={{padding: 10}}>
                                    <Link to="/ProductDetail">
                                    <img src="img/Products/Product Detail/Backpack Pink.png" alt />
                                    <h6>IDR 90.000</h6>
                                    <p>Easy Polo Black Edition</p>
                                    </Link>
                                    <Link to="/ProductDetail" className="btn animico-btnc animico-txt5">Add to cart</Link>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                {/* CONTENT END */}
            </div>
        );
    }
}
export default productList;