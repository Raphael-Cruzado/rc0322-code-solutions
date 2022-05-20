import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { switch: 'Off' };
  }

  switchClick() {
    if (this.state.switch === 'On') {
      this.setState({ switch: 'Off' });
    } else if (this.state.switch === 'Off') {
      this.setState({ switch: 'On' });
    }
  }

  render() {
    let switchText = '';
    if (this.state.switch === 'On') {
      switchText = 'On';
    } else if (this.state.switch === 'Off') {
      switchText = 'Off';
    }
    return (
      <div>
        <label className="switch">
          <input onClick={this.switchClick.bind(this)} type="checkbox"/>
            <span className="slider round"></span>
        </label>
        <h5>{switchText}</h5>
      </div>
    );
  }

}

export default ToggleSwitch;
