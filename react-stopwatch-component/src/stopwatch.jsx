import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

class StopWatch extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = { timer: 0, button: faPlay };
  }

  clockCounter() {
    const myInterval = setInterval(() => {
      if (this.state.button.iconName === 'pause') {
        this.setState(prevState => {
          return { timer: prevState.timer + 1 };
        });
      } else {
        clearInterval(myInterval);
      }
    }, 1000);

    if (this.state.button.iconName === 'play') {
      this.setState({ button: faPause });
    } else if (this.state.button.iconName === 'pause') {
      this.setState({ button: faPlay });
    }
  }

  resetClock() {
    if (this.state.button.iconName === 'play') {
      this.setState({ timer: 0 });
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='icon'>
          <div className='circle' onClick={this.resetClock.bind(this)}>{this.state.timer}</div>
        </div>
        <div className='icon'>
          <FontAwesomeIcon icon={this.state.button} onClick={this.clockCounter.bind(this)} size="3x" />
        </div>
      </div>
    );
  }
}

export default StopWatch;
