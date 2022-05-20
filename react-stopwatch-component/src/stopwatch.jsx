import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

class StopWatch extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = { timer: 'Hello' };
  }

  render() {
    return (
      <div className='container'>
        <div className='icon'>
          <div className='circle'>1</div>
        </div>
        <div className='icon'>
          <FontAwesomeIcon icon={faPlay} size="3x" />
        </div>
      </div>
    );
  }
}

export default StopWatch;
