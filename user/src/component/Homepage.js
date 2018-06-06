import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Homepage extends Component {
    render() {
        return (
            <div>
                {/* SLIDER */}
                <div className="container-fluid banner"> 
                    <div className="col-md-3" />
                    <div className="col-md-6" style={{paddingTop: '5%', textAlign: 'center'}}>
                        <div>
                        <h4 className="animico-txt3b">WELCOME TO</h4><br />
                        <div>
                            <div className="col-md-3" />
                            <div className="col-md-6"><img src="img/Logo.png" /></div>
                            <div className="col-md-3" />
                        </div>
                        <div className="col-md-12" style={{marginTop: 40}}>
                            <h4 className="animico-txt3b">"UNTIL ONE HAS LOVED AN ANIMAL,<br /> A PART OF ONE'S SOUL REMAINS UNAWAKENED"</h4>
                            <p className="animico-txt5b">-Anatole France</p>
                        </div>
                        <div className="col-md-12" style={{marginTop: 40}}>
                            <Link to="/ProductList" className="btn animico-btnc animico-txt1">SHOP NOW</Link>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3" />
                </div>
                {/* NEW ARRIVAL */}
                <div className="banner2">
                    <div className="container-fluid" style={{marginBottom: 60}}>
                        <div className="col-md-2" />
                        <div className="col-md-8">
                            <div style={{textAlign: 'center', paddingBottom: 30}}>
                                <h3 className="animico-txt5">NEW ARRIVALS</h3>
                                <p className="animico-txt3" style={{fontSize: 12}}>PRODUCTS</p>
                            </div>
                            <div style={{textAlign: 'center'}}>
                                <div className="col-md-4 banner-zebra" style={{border: '6px solid #ffffff', padding: 30}}>
                                <div>
                                    <p className="animico-txt3" style={{fontSize: 12}}>ANIMICO HOODIE</p>
                                    <p className="animico-txt5" style={{fontSize: 18}}>ZEBRA SQUARE </p>
                                </div><br />
                                <Link to="/ProductDetail"><img src="img/Products/Product Detail/Hoodie-Zebra.png" /></Link>
                                <span className="label label-success">IDR 130.000</span>
                                <div style={{padding: 20}}>
                                    <Link to="/ProductDetail">
                                    <button className="btn animico-btnc animico-txt5b" style={{fontSize: 12}}>
                                        VIEW DETAIL
                                    </button>
                                    </Link>
                                </div>
                                </div>
                                <div className="col-md-4 banner-panda" style={{border: '6px solid #ffffff', padding: 30}}>
                                <div>
                                    <p className="animico-txt3" style={{fontSize: 12}}>ANIMICO BACKPACK</p>
                                    <p className="animico-txt5" style={{fontSize: 18}}>PANDA ADVENTURE </p>
                                </div><br />
                                <Link to="ProductDetail"><img src="img/Products/Product Detail/Backpack-Panda.png" /></Link>
                                <span className="label label-success">IDR 230.000</span>
                                <div style={{padding: 20}}>
                                    <Link to="ProductDetail">
                                    <button className="btn animico-btnc animico-txt5b" style={{fontSize: 12}}>
                                        VIEW DETAIL
                                    </button>
                                    </Link>
                                </div>
                                </div>
                                <div className="col-md-4 banner-owl" style={{border: '6px solid #ffffff', padding: 30}}>
                                <div>
                                    <p className="animico-txt3" style={{fontSize: 12}}>ANIMICO TSHIRT</p>
                                    <p className="animico-txt5" style={{fontSize: 18}}>OWL SPIRIT </p>
                                </div><br />
                                <Link to="ProductDetail"><img src="img/Products/Product Detail/Owl Fix.png" /></Link>
                                <span className="label label-success">IDR 90.000</span>
                                <div style={{padding: 20}}>
                                    <Link to="ProductDetail">
                                    <button className="btn animico-btnc animico-txt5b" style={{fontSize: 12}}>
                                        VIEW DETAIL
                                    </button>
                                    </Link>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2" />
                    </div>
                </div>

                <hr style={{width: '75%'}} />
                {/* MOST POPULAR */}
                <div className="container-fluid banner3">
                    <div>
                        <div className="col-md-12" style={{marginTop: 50, marginBottom: 50, textAlign: 'center'}}> 
                        <h3 className="animico-txt5">MOST POPULAR</h3>
                        <p className="animico-txt3" style={{fontSize: 12}}>SUMMER 2018 COLLECTION</p>
                        </div>
                    </div>
                    <div>
                        <div>
                        {/* <section> */}
                        <div id="carousel-example-generic" className="carousel slide box" data-ride="carousel">
                            <ol className="carousel-indicators">
                            <li data-target="#carousel-example-generic" data-slide-to={0} className="active" />
                            <li data-target="#carousel-example-generic" data-slide-to={1} className />
                            <li data-target="#carousel-example-generic" data-slide-to={2} />
                            </ol>
                            <div className="carousel-inner">
                            <div className="item active">
                                <div className="container-fluid">
                                <div className="row">
                                    <div>
                                    <div className="col-md-2" />
                                    <div className="col-md-8">
                                        <div className="col-md-6">
                                        <div style={{textAlign: 'center'}}>
                                        <Link to="ProductDetail"><img src="img/Products/Product Detail/Hoodie-Zebra.png" style={{maxWidth: '100%'}} /></Link>
                                        </div>
                                        </div>
                                        <div className="col-md-6" style={{paddingBottom: 30, paddingTop: 30}}>
                                        <div>
                                            <p className="animico-txt3" style={{fontSize: 12}}>ANIMICO HOODIE</p>
                                            <p className="animico-txt5" style={{fontSize: 20}}>ZEBRA SQUARE </p>
                                            <hr style={{height: 10, borderColor: '#009946'}} />
                                        </div>
                                        <div>
                                            <p className="animico-txt3" style={{fontSize: 10}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.<br /><br />- Cotton Combed 30s<br />- Available Size : S / M / L / XL<br />- Price : IDR 90.000</p>
                                        </div>
                                        <div>
                                            {/*Checkbox butons*/}
                                            <div className="btn-group" data-toggle="buttons">
                                            <label className="btn animico-btnc2 active form-check-label animico-txt5" style={{fontSize: 12}}>
                                                <input className="form-check-input" type="radio" autoComplete="off" /> S
                                            </label>
                                            <label className="btn animico-btnc2 form-check-label animico-txt5" style={{fontSize: 12}}>
                                                <input className="form-check-input" type="radio" autoComplete="off" /> M
                                            </label>
                                            <label className="btn animico-btnc2 form-check-label animico-txt5" style={{fontSize: 12}}>
                                                <input className="form-check-input" type="radio" autoComplete="off" /> L
                                            </label>
                                            <label className="btn animico-btnc2 form-check-label animico-txt5" style={{fontSize: 12}}>
                                                <input className="form-check-input" type="radio" autoComplete="off" /> XL
                                            </label>
                                            </div>
                                            {/*Checkbox butons*/}
                                        </div>
                                        <div style={{paddingTop: 20}}>
                                            <img src="img/Icon/wallet-icon.png" style={{width: 30, height: 30, marginRight: 10}} />
                                            <span className="animico-txt5" style={{fontSize: 18}}>IDR 130.000</span>
                                        </div>
                                        <div style={{paddingTop: 10}}>
                                            <Link to="#" type="submit" className="btn animico-btnc animico-txt5" style={{fontSize: 10}}>ADD TO CART</Link>
                                            <Link to="#" type="submit" className="fa fa-heart btn animico-btn2" style={{padding: 8}} />
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2" />
                                    </div>
                                </div>
                                {/* PRODUCT END */}
                                </div>
                            </div>
                            <div className="item">
                                <div className="container-fluid">
                                <div className="row">
                                    <div>
                                    <div className="col-md-2" />
                                    <div className="col-md-8">
                                        <div className="col-md-6">
                                        <div style={{textAlign: 'center'}}>
                                        <Link to="ProductDetail"><img src="img/Products/Product Detail/Snake Tshirt Fix.png" style={{maxWidth: '100%'}} /></Link>
                                        </div>
                                        </div>
                                        <div className="col-md-6" style={{paddingBottom: 30, paddingTop: 30}}>
                                        <div>
                                            <p className="animico-txt3" style={{fontSize: 12}}>ANIMICO TSHIRT</p>
                                            <p className="animico-txt5" style={{fontSize: 20}}>SNAKE MASTER </p>
                                            <hr style={{height: 10, borderColor: '#009946'}} />
                                        </div>
                                        <div>
                                            <p className="animico-txt3" style={{fontSize: 10}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.<br /><br />- Cotton Combed 30s<br />- Available Size : S / M / L / XL<br />- Price : IDR 90.000</p>
                                        </div>
                                        <div>
                                            {/*Checkbox butons*/}
                                            <div className="btn-group" data-toggle="buttons">
                                            <label className="btn animico-btnc2 active form-check-label animico-txt5" style={{fontSize: 12}}>
                                                <input className="form-check-input" type="radio" autoComplete="off" /> S
                                            </label>
                                            <label className="btn animico-btnc2 form-check-label animico-txt5" style={{fontSize: 12}}>
                                                <input className="form-check-input" type="radio" autoComplete="off" /> M
                                            </label>
                                            <label className="btn animico-btnc2 form-check-label animico-txt5" style={{fontSize: 12}}>
                                                <input className="form-check-input" type="radio" autoComplete="off" /> L
                                            </label>
                                            <label className="btn animico-btnc2 form-check-label animico-txt5" style={{fontSize: 12}}>
                                                <input className="form-check-input" type="radio" autoComplete="off" /> XL
                                            </label>
                                            </div>
                                            {/*Checkbox butons*/}
                                        </div>
                                        <div style={{paddingTop: 20}}>
                                            <img src="img/Icon/wallet-icon.png" style={{width: 30, height: 30, marginRight: 10}} />
                                            <span className="animico-txt5" style={{fontSize: 18}}>IDR 130.000</span>
                                        </div>
                                        <div style={{paddingTop: 10}}>
                                            <Link to="#" type="submit" className="btn animico-btnc animico-txt5" style={{fontSize: 10}}>ADD TO CART</Link>
                                            <Link to="#" type="submit" className="fa fa-heart btn animico-btn2" style={{padding: 8}} />
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2" />
                                    </div>
                                </div>
                                {/* PRODUCT END */}
                                </div>
                            </div>
                            <div className="item">
                                <div className="container-fluid">
                                <div className="row">
                                    <div>
                                    <div className="col-md-2" />
                                    <div className="col-md-8">
                                        <div className="col-md-6">
                                        <div style={{textAlign: 'center'}}>
                                        <Link to="ProductDetail"><img src="img/Products/Product Detail/Backpack-Panda.png" style={{maxWidth: '100%'}} /></Link>
                                        </div>
                                        </div>
                                        <div className="col-md-6" style={{paddingBottom: 30, paddingTop: 30}}>
                                        <div>
                                            <p className="animico-txt3" style={{fontSize: 12}}>ANIMICO BACKPACK</p>
                                            <p className="animico-txt5" style={{fontSize: 20}}>ZEBRA SQUARE </p>
                                            <hr style={{height: 10, borderColor: '#009946'}} />
                                        </div>
                                        <div>
                                            <p className="animico-txt3" style={{fontSize: 10}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.<br /><br />- Cotton Combed 30s<br />- Available Size : S / M / L / XL<br />- Price : IDR 90.000</p>
                                        </div>
                                        <div>
                                            {/*Checkbox butons*/}
                                            <div className="btn-group" data-toggle="buttons">
                                            <label className="btn animico-btnc2 active form-check-label animico-txt5" style={{fontSize: 12}}>
                                                <input className="form-check-input" type="radio" autoComplete="off" /> S
                                            </label>
                                            <label className="btn animico-btnc2 form-check-label animico-txt5" style={{fontSize: 12}}>
                                                <input className="form-check-input" type="radio" autoComplete="off" /> M
                                            </label>
                                            <label className="btn animico-btnc2 form-check-label animico-txt5" style={{fontSize: 12}}>
                                                <input className="form-check-input" type="radio" autoComplete="off" /> L
                                            </label>
                                            <label className="btn animico-btnc2 form-check-label animico-txt5" style={{fontSize: 12}}>
                                                <input className="form-check-input" type="radio" autoComplete="off" /> XL
                                            </label>
                                            </div>
                                            {/*Checkbox butons*/}
                                        </div>
                                        <div style={{paddingTop: 20}}>
                                            <img src="img/Icon/wallet-icon.png" style={{width: 30, height: 30, marginRight: 10}} />
                                            <span className="animico-txt5" style={{fontSize: 18}}>IDR 130.000</span>
                                        </div>
                                        <div style={{paddingTop: 10}}>
                                            <Link to="#" type="submit" className="btn animico-btnc animico-txt5" style={{fontSize: 10}}>ADD TO CART</Link>
                                            <Link to="#" type="submit" className="fa fa-heart btn animico-btn2" style={{padding: 8}} />
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2" />
                                    </div>
                                </div>
                                {/* PRODUCT END */}
                                </div>
                            </div>
                            </div>
                            <Link to="#carousel-example-generic" className="left control-carousel hidden-xs" data-slide="prev">
                            <i className="fa fa-angle-left" />
                            </Link>
                            <Link to="#carousel-example-generic" className="right control-carousel hidden-xs" data-slide="next">
                            <i className="fa fa-angle-right" />
                            </Link>
                        </div>
                        {/* </section> */}
                        </div>
                    </div>
                    <div>
                        <div className="animico-txt3" style={{textAlign: 'center', padding: 30}}>
                        <h5 className="animico-txt4">SEE MORE IN</h5>
                        <h3 className="animico-txt1">ALL <span className="animico-txt5">COLLECTIONS</span></h3>
                        <Link to="/ProductList" className="btn animico-btnc animico-txt3">ALL COLLECTION</Link>
                        </div>
                    </div>
                </div>
                {/* PROMO */}
                <div style={{textAlign: 'center'}}>
                    <div className="col-md-6 animico-txt2b banner-promo-left" style={{backgroundColor: '#162345', textAlign: 'center', padding: 31}}>
                        <p>COMING SOON!</p>
                        <h1 className="animico-txt5b">ANIMICO <span className="animico-txt1b">SHOES</span></h1>
                        <p>Get Special Price for Pre Order</p>
                        <Link to="/ProductList" className="btn animico-btnb animico-txt1" style={{marginTop: 20}}>Pre Order Now</Link>
                    </div>
                    <div className="col-md-6 animico-txt2b banner-promo-right" style={{backgroundColor: '#121d39', textAlign: 'center', padding: 31}}>
                        <p>ALL BACKPACK!</p>
                        <h1 className="animico-txt5b">DISCOUNT <span className="animico-txt1b">30%</span></h1>
                        <p>Grab em'now!</p>
                        <Link to="/ProductList" className="btn animico-btnc animico-txt1" style={{marginTop: 20}}>See Collection</Link>
                    </div>
                </div>
                {/* NEWSLETTER */}
                <div className="container-fluid" style={{padding: 30, backgroundColor: '#27282c'}}>
                    <div style={{textAlign: 'center anim-loginbox'}}>
                        <div className="col-md-2" />
                        <div className="col-md-8">
                        <div className="anim-loginbox">
                            <form>
                            <div className="form-group" style={{textAlign: 'center'}}>
                                <h3 className="animico-txt4b">SUBSCRIBE TO OUR NEWSLETTER</h3>
                                <p className="animico-txt1b">by subscribing you will get the latest information about our new arrivals, event and discount</p>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div style={{textAlign: 'center', padding: 10}}>
                                <Link to="#" type="submit" className="btn animico-btnc animico-txt3">SUBSCRIBE</Link>
                            </div>
                            </form>
                        </div>
                        </div>
                        <div className="col-md-2" />
                    </div>
                </div>


            </div>
        );
    }
}
export default Homepage;