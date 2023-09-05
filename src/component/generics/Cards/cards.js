import React from 'react';
import styles from './cards.module.scss';

function Card({ imageUrl, title, body }) {
  return (
    <div className={styles.card}>
    <div className={styles.cardImage}>
      <img src={imageUrl} alt={title} className={styles.image} />
    </div>
    <h3 className={styles.cardTitle}>{title}</h3>
    <p className={styles.cardBody}>{body}</p>
    <button className={styles.cardButton}>Action</button>
  </div>
  );
}

export default Card;
