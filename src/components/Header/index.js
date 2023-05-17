// Write your JS code here

import {Component} from 'react'

import './index.css'

class Header extends Component {
  render() {
    return (
      <nav className="nav-item-header">
        <div className="nav-container">
          <div className="navbar-logo">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="website-logo"
            />
            <button type="button" className="nav-btn">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
                alt="nav logout"
                className="nav-img"
              />
            </button>
          </div>
          <div className="navbar-large-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="website-logo"
            />
            <div className="navbar-large-container">
              <ul className="nav-menu-list">
                <li className="nav-menu">Home</li>
                <li className="nav-menu">Products</li>
                <li className="nav-menu">Cart</li>
              </ul>
            </div>
            <button type="button" className="logout-desktop">
              Logout
            </button>
          </div>
        </div>
        <div className="nav-menu-mobile">
          <ul className="nav-menu-list">
            <li className="nav-item-menu">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                alt="nav home"
                className="nav-img"
              />
            </li>
            <li className="nav-item-menu">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
                alt="nav products"
                className="nav-img"
              />
            </li>
            <li className="nav-item-menu">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
                alt="nav cart"
                className="nav-img"
              />
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
export default Header
