import React from 'react';
import { connect } from 'react-redux';
import { dismiss } from '../actions/alerts';
import { Alert } from 'react-bootstrap';

function mapStateToProps(store) {
  return {
    alert: store.alerts.alert,
    type: store.alerts.type,
  };
}

class Alerts extends React.Component {
  constructor() {
    super();

    this.dismissAlert = this.dismissAlert.bind(this);
  }

  dismissAlert() {
    this.props.dispatch(dismiss());
  }

  render() {
    if (this.props.alert) {
      return (
        <Alert bsStyle={this.props.type} onDismiss={this.dismissAlert}>
          <p>{this.props.alert}</p>
        </Alert>
      );
    } else {
      return null;
    }
  }
}

export default connect(mapStateToProps)(Alerts);
