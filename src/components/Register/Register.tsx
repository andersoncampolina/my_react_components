import styles from './Register.module.css'; // Import the CSS module file
import React, { useEffect, useState } from 'react';

interface Props {
  color1?: string;
  color2?: string;
}

const Register = ({ color1 = '#6c52ff', color2 = '#03a9f4' }: Props) => {

  const [isSlide, setSlide] = useState(false);

  useEffect(() => {
    let inputSignin = document.querySelector('#inputSignin');
    let inputSignup = document.querySelector('#inputSignup');
    inputSignin?.setAttribute('style', `background: ${color1};`);
    inputSignup?.setAttribute('style', `background: ${color2};`);
    if (isSlide) {
      document.body.style.background = color2;
      inputSignin?.setAttribute('style', `background: ${color1};`);
    } else {
      document.body.style.background = color1;
    }
  }, [isSlide]);

  const handleSignup = () => {
    setSlide(true);
  };

  const handleSignin = () => {
    setSlide(false);
  };

  return (
    <div className={`${styles.container} ${isSlide ? styles.slide : ''}`}>
      <div className={`${styles.box} ${styles.signin}`}>
        <h2>Already Have an Account ?</h2>
        <button className={styles.signinBtn} onClick={handleSignin}>
          Sign in
        </button>
      </div>
      <div className={`${styles.box} ${styles.signup}`}>
        <h2>Don't Have an Account ?</h2>
        <button className={styles.signupBtn} onClick={handleSignup}>
          Sign up
        </button>
      </div>
      <div className={styles.formBx}>
        <div className={`${styles.form} ${styles.signinform}`}>
          <form action="">
            <h3>Sign in</h3>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Email Address" />
            <input id="inputSignin" type="submit" value="Login" />
            <a href="https://www.putyourlinkhere.com">Forgot Password ?</a>
          </form>
        </div>
        <div className={`${styles.form} ${styles.signupform}`}>
          <form action="">
            <h3>Sign up</h3>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm" />
            <input id="inputSignup" type="submit" value="Register" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

