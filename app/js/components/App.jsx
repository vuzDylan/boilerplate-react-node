'use strict';

import React from 'react';
import TopNav from '../containers/TopNav';

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <TopNav />
        {this.props.children}
      </div>
    );
  }
}

export default App;
