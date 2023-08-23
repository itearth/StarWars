import React, { useState } from 'react';
import { Avatar } from 'flowbite-react';
import styles from '../Navbar/navbar.module.css';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className={styles.topnav}>
      <a href="#home" className={styles.active}>Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
      <div className={styles.avatarDropdown}>
        <Avatar className={styles.avatar} rounded size="small" />
        <div className={styles.dropdownContent}>
          <a href="#">Profile</a>
          <a href="#">Settings</a>
          <a href="#">Sign Out</a>
        </div>
      </div>
      <a href="javascript:void(0);" className={styles.icon} onClick={toggleNav}>
        <i className="fa fa-bars"></i>
      </a>
    </div>
  );
};


export default Navbar;
