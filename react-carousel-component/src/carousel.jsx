import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='container'>
        <div className='wrapper'>
          <span><i className="arrow" id='left'></i></span>
          <div className='column-1'>
            <img src="./images/batman.png" alt="image" id='image' />
            <div className='circles'>
              <span className='dot shade'></span>
              <span className='dot'></span>
              <span className='dot'></span>
              <span className='dot'></span>
              <span className='dot'></span>
            </div>
          </div>
          <span><i className="arrow" id='right'></i></span>
        </div>
      </div>
    );
  }
}

export default Carousel;
