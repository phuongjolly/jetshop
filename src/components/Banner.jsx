import React from 'react';
import { connect } from 'react-redux';
import './Banner.css';

class Banner extends React.Component {
  render() {
    return (
      <div className="main-banner">
        <div className="slide-button">
          <i className="arrow left icon" />
        </div>
        <div className="slide-button">
          <i className="arrow right icon" />
        </div>
      </div>
    );
  }
}

export default connect(
  state => state.banner,
)(Banner);
