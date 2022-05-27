import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
  }

  getClicks() {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  render() {
    let btnClass;
    if (this.state.clicks < 3) {
      btnClass = 'no-Clicks';
    } else if (this.state.clicks < 6) {
      btnClass = 'purle-btn';
    } else if (this.state.clicks < 9) {
      btnClass = 'violet-btn';
    } else if (this.state.clicks < 12) {
      btnClass = 'salmon-btn';
    } else if (this.state.clicks < 15) {
      btnClass = 'yellow-btn';
    } else if (this.state.clicks < 18) {
      btnClass = 'white-btn';
    }
    return <button onClick={this.getClicks.bind(this)} className={btnClass}>Hot Button</button>;
  }
}

export default HotButton;
