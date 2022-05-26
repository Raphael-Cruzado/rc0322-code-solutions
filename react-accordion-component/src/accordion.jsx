import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    // const { languages } = props;
    this.state = { header1: false, header2: false, header3: false };
  }

  handleHeader(e) {
    if (e.target.innerText === 'Hypertext Markup Language') {
      this.setState({ header1: true });
    }
    if (this.state.header1 === true) {
      this.setState({ header1: false });
    }

    if (e.target.innerText === 'Cascading Style Sheets') {
      this.setState({ header2: true });
    }
    if (this.state.header2 === true) {
      this.setState({ header2: false });
    }

    if (e.target.innerText === 'JavaScript') {
      this.setState({ header3: true });
    }
    if (this.state.header3 === true) {
      this.setState({ header3: false });
    }
  }

  render() {
    let shrink1 = 'shrink';
    let shrink2 = 'shrink';
    let shrink3 = 'shrink';
    if (this.state.header1 === false) {
      shrink1 = 'shrink';
    } else if (this.state.header1 === true) {
      shrink1 = 'unshrink';
    }
    if (this.state.header2 === false) {
      shrink2 = 'shrink';
    } else if (this.state.header2 === true) {
      shrink2 = 'unshrink';
    }
    if (this.state.header3 === false) {
      shrink3 = 'shrink';
    } else if (this.state.header3 === true) {
      shrink3 = 'unshrink';
    }
    return (
      <div className='container'>
        <div className='wrapper'>
          <h3 onClick={this.handleHeader.bind(this)}>{this.props.languages[0].title}</h3>
          <p className={shrink1}>{this.props.languages[0].text}</p>
          <h3 onClick={this.handleHeader.bind(this)}>{this.props.languages[1].title}</h3>
          <p className={shrink2}>{this.props.languages[1].text}</p>
          <h3 onClick={this.handleHeader.bind(this)}>{this.props.languages[2].title}</h3>
          <p className={shrink3}>{this.props.languages[2].text}</p>
        </div>
      </div>
    );
  }
}

export default Accordion;
