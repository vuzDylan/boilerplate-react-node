'use strict';

import React from 'react';
import { Link } from 'react-router';

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

export default OfficersApp;
