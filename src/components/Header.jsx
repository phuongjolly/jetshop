import React from 'react';
import Banner from './Banner';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="top-header">
          <div className="item">
            <i className="envelope outline icon" />
            <label>lephuong06t3@gmail.com</label>
          </div>
          <div className="item">
            <i className="phone icon" />
            <label>(+65)8876 4037</label>
          </div>
          <div className="item">
            <i className="facebook f icon" />
          </div>
          <div className="item">
            <i className="twitter icon" />
          </div>
        </div>
        <div className="main-header">
          <div className="item">
            <i className="align justify icon" />
          </div>
          <div className="item">
            <i className="twitter icon" />
            <label>UniShop</label>
          </div>
          <div className="item-big">
            <div>HOME</div>
            <div>SHOP</div>
            <div>CONTACT US</div>
            <div>ABOUT</div>
          </div>
        </div>
        <Banner />
      </div>
    );
  }
}

export default Header;
