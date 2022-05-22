import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pw: '', icon: faCheck };
  }

  handleIcon() {

  }

  handlePwChange() {

  }

  handleSubmit(e) {
    e.preventDefault();
    // eslint-disable-next-line
    console.log(this.state.pw);
  }

  render() {
    const iconColor = 'green';
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
