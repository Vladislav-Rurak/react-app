import classNames from 'classnames';
import React, { Component } from 'react';
import styles from './LoginForm.module.css';

const INITIAL_VALUSE = {
  email: '',
  password: '',
};
const EMAIL_REG_EXPR = /^\S{5,60}$/;
const PASSWORD_REG_EXPR = /^\S{7,60}$/;

class LoginForm extends Component {
  constructor (props) {
    super(props);

    this.state = {
      email: '',
      isEmailValid: false,
      password: '',
      isPasswordValid: false,
    };
  }

  handleEmailChange = ({ target: { value } }) => {
    this.setState({
      email: value,
      isEmailValid: EMAIL_REG_EXPR.test(value),
    });
  };

  handlePasswordChange = ({ target: { value } }) => {
    this.setState({
      password: value,
      isPasswordValid: PASSWORD_REG_EXPR.test(value),
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    e.setState({ INITIAL_VALUSE });
  };

  render () {
    const { email, password, isEmailValid, isPasswordValid } = this.state;
    const emailClassNames = classNames(styles.input, {
      [styles.inputValid]: isEmailValid,
      [styles.inputInValid]: !isEmailValid,
    });

    const passwordClassNames = classNames(styles.input, {
      [styles.inputValid]: isPasswordValid,
      [styles.inputInValid]: !isPasswordValid,
    });

    return (
      <form className={styles.formContainer} onSubmit={this.handleSubmit}>
        <label className={styles.label}>
          <span>Email</span>
          <input
            className={emailClassNames}
            value={email}
            onChange={this.handleEmailChange}
            type='email'
            name='email'
            placeholder='email'
            autoFocus
          />
        </label>
        <label className={styles.label}>
          <span>Password</span>
          <input
            className={passwordClassNames}
            value={password}
            onChange={this.handlePasswordChange}
            type='password'
            name='password'
            placeholder='password'
          />
        </label>
        <button className={styles.submit}>Login</button>
      </form>
    );
  }
}

export default LoginForm;
