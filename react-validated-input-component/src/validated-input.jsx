import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pw: '', icon: faCheck };
  }

  handleIcon() {
  }

  handlePwChange(e) {
    this.setState({ pw: e.target.value });

  }

  handleSubmit(e) {
    e.preventDefault();
    // eslint-disable-next-line
    console.log(this.state);
    const text = this.state.pw;
    const length = text.length;
    if (length <= 8) {
      this.setState({ icon: faTimes });
    } else {
      this.setState({ icon: faCheck });
    }
  }

  render() {
    let iconColor = 'green';
    if (this.state.icon.iconName === 'xmark') {
      iconColor = 'red';
    } else if (this.state.icon.iconName === 'check') {
      iconColor = 'green';
    }
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className='container'>
          <div className='label'>
            <label> <strong>Password:</strong> </label>
          </div>
          <div className='input'>
            <input type="password" onChange={this.handlePwChange.bind(this)} value={this.state.pw} />
            <FontAwesomeIcon icon={this.state.icon} color={iconColor} id="check" />
          </div>
        </div>
      </form>
    );
  }
}

export default ValidatedInput;
