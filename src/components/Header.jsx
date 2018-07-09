import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <div className="header">
      <div className="main-header">
        <div className="left-item">
          <Link className="logo" to="/">
            <i className="fa fa-cutlery" />
              Vegan Food
          </Link>
          <Link className="item" to="/reviews">
            <i className="comment icon" />
            <span>
Reviews
            </span>
          </Link>
          <Link className="item" to="/collections">
            <i className="heart icon" />
            <span>
              Collections
            </span>
          </Link>
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

export default Header;
