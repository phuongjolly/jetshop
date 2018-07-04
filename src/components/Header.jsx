import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="main-header">
          <div className="left-item">
            <i className="bars icon" />
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
