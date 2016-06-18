import React from 'react';

const App = (props) => (
  <div>
    {props.children}
  </div>
);

App.propTypes = {
  initialCount: React.PropTypes.array,
};

export default App;
