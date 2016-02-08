'use strict';

import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    officers: state.officers,
  };
}


class Other extends React.Component {
  constructor() {
    super();
  }

  render() {
    return ( 
      <h2>Home</h2>
    );
  }
}

export default connect(mapStateToProps)(Other);

