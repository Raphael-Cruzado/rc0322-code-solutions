import React from 'react';
import ReactDOM from 'react-dom/client';

class CustomButton {
  constructor(props, props2, props3) {
    this.props = props;
    this.props2 = props2;
    this.props3 = props3;
  }
}

class CreateButton extends CustomButton {
  super(props, props2, props3) {

  }

  button() {
    return (
      <div>
        <button>{this.props}</button>
        <button>{this.props2}</button>
        <button>{this.props3}</button>
      </div>
    );
  }
}
const button = new CreateButton('I', 'know', 'React!');
const element = button.button();

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(element);
