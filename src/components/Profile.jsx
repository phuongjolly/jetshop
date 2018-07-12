import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Profile extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <div>
          {user.name}
        </div>
        <div>
          {user.username}
        </div>
      </div>
    );
  }
}

export default connect(
  state => state.profile,
)(Profile);

Profile.propTypes = {
  user: PropTypes.shape(),
};

Profile.defaultProps = {
  user: null,
};
