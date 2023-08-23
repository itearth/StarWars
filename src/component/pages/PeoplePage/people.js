import React from 'react';
import Navbar from '../../generics/Navbar/navbar';
import styles from '../PeoplePage/people.module.css'; 

const People = () => {
  return (
    <div className={styles.pageContainer}>
      <Navbar />
      {/* Rest of your content */}
    </div>
  );
};

export default People;
