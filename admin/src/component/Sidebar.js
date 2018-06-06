import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return (
          <aside className="menu-sidebar d-none d-lg-block">
          <div className="logo">
            <a href="#">
              <img src="images/icon/logo.png" alt="Cool Admin" />
            </a>
          </div>
          <div className="menu-sidebar__content js-scrollbar1">
            <nav className="navbar-sidebar">
              <ul className="list-unstyled navbar__list">
                <li className="active has-sub">
                  <a className="js-arrow" href="#">
                    <i className="fas fa-home" />Overview</a>
                </li>
                <li>
                  <a href="products.html">
                    <i className="fas fa-table" />Products</a>
                </li>
                <li>
                  <a href="history.html">
                    <i className="far fa-check-square" />History</a>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
        

        );
    }
}
export default Sidebar;