import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="top-header">
          <div className="item">
            <i className="envelope outline icon" />
            <label>contact@jetshop.com</label>
          </div>
          <div className="item">
            <i className="phone icon" />
            <label>(+65)868686</label>
          </div>
          <div className="item">
            <i className="facebook f icon" />
          </div>
          <div className="item">
            <i className="twitter icon" />
          </div>
        </div>
        <div className="main-header">
          <div className="left-item">
            <i className="bars icon" />
          </div>
          <div className="logo">
            <img src="http://themes.rokaux.com/unishop/v3.0/template-1/img/logo/logo.png" alt="logo" />
          </div>
          <div className="menu">
            <div className="item">HOME</div>
            <div className="item">SHOP</div>
            <div className="item">CONTACT US</div>
            <div className="item">ABOUT</div>
          </div>
          <div className="tool-bar">
            <div className="item">
              <i className="search icon" />
            </div>
            <div className="item">
              <i className="user outline icon" />
            </div>
            <div className="cart">
              <div>
                3
              </div>
              <di>
                $1000
              </di>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
