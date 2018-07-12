import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export function Header({ user }) {
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
          <div className="item user-info">
            <i className="user outline icon" />
            <div className="content">
              <div className="user-info-detail">
                <div className="avatar">
                  <img src={user.avatar} alt="avatar" />
                </div>
                <div>
                  <span>
                    {user.name}
                  </span>
                </div>
              </div>
              <div className="user-menu">
                <Link to="/Profile">
                  Profile
                </Link>
              </div>
              <div>
                <Link to="/user/logout">
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(
  state => state.authentication,
)(Header);

Header.propTypes = {
  user: PropTypes.shape(),
};

Header.defaultProps = {
  user: null,
};
