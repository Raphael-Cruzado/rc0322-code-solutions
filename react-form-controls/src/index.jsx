import React from 'react';
import ReactDOM from 'react-dom/client';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', pw: '' };
  }

  userNameChange(e) {
    this.setState({ username: e.target.value });
  }

  pwChange(e) {
    this.setState({ pw: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label name="username"> username:
          <input name="username" type="text" value={this.state.username} onChange={this.userNameChange.bind(this)} />
        </label>
        <label name="password"> password:
          <input name="password" type="password" value={this.state.pw} onChange={this.pwChange.bind(this)} />
        </label>
        <button name="signUpBtn">Sign Up</button>
      </form>
    );
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<RegistrationForm />);
