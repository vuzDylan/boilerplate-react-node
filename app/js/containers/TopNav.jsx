import React from 'react';
import AppBar from 'material-ui/AppBar';
import { connect } from 'react-redux';
import { toggleDrawer, toggleMenu } from '../actions/nav';

function mapStateToProps(store) {
  return {};
}

class TopNav extends React.Component {
  constructor() {
    super();

    this.openMenu = this.openMenu.bind(this);
    this.openDrawer = this.openDrawer.bind(this);
  }
  openMenu() {
    this.props.dispatch(toggleMenu());
  }
  openDrawer() {
    this.props.dispatch(toggleDrawer());
  }
  render() {
    return (
      <AppBar
        title="Example"
        iconClassNameRight="fa fa-angle-down"
        onLeftIconButtonTouchTap={this.openDrawer}
        onRightIconButtonTouchTap={this.openMenu}
      />
    )
  }
}

export default connect(mapStateToProps)(TopNav);
