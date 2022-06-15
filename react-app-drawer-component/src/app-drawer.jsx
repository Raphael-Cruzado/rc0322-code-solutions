import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinesLeaning } from '@fortawesome/free-solid-svg-icons';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };

  }

  handleDrawer(e) {
    if (e.target.className.baseVal === 'svg-inline--fa fa-lines-leaning fa-3x ') {
      this.setState({ isActive: true });
    } else if (e.target.className === 'container modal') {
      this.setState({ isActive: false });
    }
  }

  render() {
    let navBar = 'sidenav';
    let container = 'container';
    if (this.state.isActive === true) {
      navBar += ' sidenav-after';
      container += ' modal';
    }
    return (
      <div className={container} onClick={this.handleDrawer.bind(this)}>
        <div className={navBar}>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>
        <span>
          <FontAwesomeIcon
          icon={faLinesLeaning}
          size='3x' id='icon'
          cursor='pointer'
          onClick={this.handleDrawer.bind(this)}
          />
        </span>
      </div>
    );
  }
}

export default AppDrawer;
