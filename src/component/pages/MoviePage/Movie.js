import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../generics/Navbar/navbar';
import styles from './Movie.module.scss';
import { BarLoader } from 'react-spinners';
import { movieActions } from '../../../redux/slices/movie.slice'; // Update the path accordingly
import { fetchMovie } from '../../../services/movieService';
import Card from '../../generics/Cards/cards';


function MoviePage() {

  const dispatch = useDispatch();
  const { movie, loading } = useSelector((state) => state.movieState);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    loadMovie(1);
  }, []);

  async function loadMovie(_pageNumber) {
    //console.log('test');
    const response = await dispatch(fetchMovie(_pageNumber));
    const _totalPages = Math.ceil(response.count / 10);
    setTotalPages(_totalPages);
  }

  const handlePrevious = () => {

    if (currentPage <= 1) {
      return;
    }

    const _page = currentPage - 1;
    setCurrentPage(_page);
    loadMovie(_page);
  };

  const handleNext = () => {

    if (currentPage >= totalPages) {
      return;
    }

    const _page = currentPage + 1;
    setCurrentPage(_page);
    loadMovie(_page);
  };

  return (
    <div className={styles.pageContainer}>
      <Navbar />
      {loading || !movie ? (
        <div className={styles.loadingContainer}>
          <BarLoader color="#142d4c" loading={loading} />
        </div>
      ) : (
        <div className={`${styles.cardsContainer} ${styles.marginTop}`}>
          {movie.results.map((person, index) => (

            <Card
              key={index}
              imageUrl={`https://source.unsplash.com/300x200/?starwars,${person.director}`}
              title={person.director}
              body={`Height: ${person.title}`}
            />
            // <div className={styles.card} key={index}>
            //   <div className={styles.cardImage}>
            //     <img
            //       src={`https://source.unsplash.com/300x200/?starwars,${person.director}`}
            //       alt={person.director}
            //       className={styles.image}
            //     />
            //   </div>
            //   <h3 className={styles.cardTitle}>{person.director}</h3>
            //   <p className={styles.cardBody}>Height: {person.title}</p>
            //   <button className={styles.cardButton}>Action</button>
            // </div>
          ))}
        </div>
      )}

      <div className={styles.pagination}>
        <button
          className={styles.paginationButton}
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className={styles.pageNumber}>
          Page {currentPage} of {totalPages}
        </span>
        <button
          className={styles.paginationButton}
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MoviePage;
