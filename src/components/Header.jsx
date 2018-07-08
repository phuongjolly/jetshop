import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="main-header">
          <div className="left-item">
            <Link class="item" to="/reviews">
              <i className="comment icon" />
              <span>Reviews</span>
            </Link>
            <Link class="item" to="/collections">
              <i className="heart icon" />
              <span>Collections</span>
            </Link>
          </div>
          <div className="menu">
            <img src="https://www.abillionveg.com/static/media/logo-redux-small.1ca4fde8.png" alt="logo" />
          </div>
          <div className="tool-bar">
            <div className="item">
              <i className="search icon" />
            </div>
            <div className="item">
              <i className="user outline icon" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
