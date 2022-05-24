import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { header1: false, header2: false, header3: false };
  }

  handleHeader(e) {
    if (e.target.innerText === 'Hypertext Markup Language') {
      this.setState({ header1: true });
    }
    if (this.state.header1 === true) {
      this.setState({ header1: false });
    }

    if (e.target.innerText === 'Cascading Style Sheet') {
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
          <h3 onClick={this.handleHeader.bind(this)}>Hypertext Markup Language</h3>
          <p className={shrink1}>Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web
            applications. With Cascading Style Sheets (CSS) JavaScript, it forms a triad of cornerstone technologies
            for the World Wide Web.
          </p>
          <h3 onClick={this.handleHeader.bind(this)}>Cascading Style Sheet</h3>
          <p className={shrink2}>Cascading Stule Sheets (CSS) is a style sheet language used for describing the presentation of a
          document written in a markup language like HTML. CSS is a cornerstone technology of the Worl Wide Web. alongside HTML and Javascript
          </p>
          <h3 onClick={this.handleHeader.bind(this)}>JavaScript</h3>
          <p className={shrink3}>JavaScript, often abbreviated as JS, is a high-level, interpreted programming laganuage that confroms to the ECMAscript
            specification. JavaScript has curly bracket syntax, dynamic typing, prototyped-based object-orientation and first-class
            functions.
          </p>
        </div>
      </div>
    );
  }
}

export default Accordion;
