import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../LoginPage/login.module.css';

const Login = () => {
  return (
    <div className={styles.container}>
      <Link to="/people" className={styles.button}>People</Link>
      <Link to="/movie" className={styles.button1}>Movie</Link>
    </div>
  );
};

export default Login;
