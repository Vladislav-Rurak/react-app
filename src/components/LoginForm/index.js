import React, {
  Component,
} from "react";
import styles from "./LoginForm.module.css";

class LoginForm extends Component {
  render() {
    return (
      <form
        className={styles.formContainer}
      >
        <label className={styles.label}>
          <span>Email</span>
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="email"
            autoFocus
          />
        </label>

        <button
          className={styles.submit}
        >
          Login
        </button>
      </form>
    );
  }
}

export default LoginForm;
