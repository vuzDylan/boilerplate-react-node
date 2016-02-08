'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

class OfficersApp extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>App container</h1>
        {this.props.children}
      </div>

    );
  }
}

export default connect(mapStateToProps)(OfficersApp);
