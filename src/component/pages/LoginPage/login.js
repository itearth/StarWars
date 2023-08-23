import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../LoginPage/login.module.css';

const Login = () => {
  return (
    <div className={styles.container}>
      <Link to="/people" className={styles.button}>People</Link>
    </div>
  );
};

export default Login;
