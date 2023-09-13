import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../generics/Navbar/navbar';
import styles from './people.module.scss';
import { BarLoader } from 'react-spinners';
import { peopleActions } from '../../../redux/slices/star.slice'; 
import { fetchPeople } from '../../../services/starService';
import Card from '../../generics/Cards/cards';
import { useNavigate } from 'react-router-dom';


function PeoplePage() {

  const dispatch = useDispatch();
  const { people, loading } = useSelector((state) => state.peopleState);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();

  // useEffect(() => {
  //   loadPeople(1);
  // }, []);

  useEffect(() => {
    // Retrieve the current page from localStorage
    const savedPage = localStorage.getItem('currentPage');
    if (savedPage) {
      setCurrentPage(parseInt(savedPage));
      loadPeople(parseInt(savedPage));
    } else {
      loadPeople(1);
    }
  }, []);

  async function loadPeople(_pageNumber) {
    const response = await dispatch(fetchPeople(_pageNumber));
    const _totalPages = Math.ceil(response.count / 10);
    setTotalPages(_totalPages);
  }

  const handlePrevious = () => {

    if (currentPage <= 1) {
      return;
    }

    const _page = currentPage - 1;
    setCurrentPage(_page);
    loadPeople(_page);
     // Save the current page to localStorage
     localStorage.setItem('currentPage', _page.toString());
     navigate(`/people?page=${_page}`);
  };

  const handleNext = () => {

    if (currentPage >= totalPages) {
      return;
    }

    const _page = currentPage + 1;
    setCurrentPage(_page);
    loadPeople(_page);
  };

  return (
    <div className={styles.pageContainer}>
      <Navbar />
      {loading || !people ? (
        <div className={styles.loadingContainer}>
          <BarLoader color="#142d4c" loading={loading} />
        </div>
      ) : (
        <div className={`${styles.cardsContainer} ${styles.marginTop}`}>
          {people.results.map((person, index) => (

            <Card
              key={index}
              imageUrl={`https://source.unsplash.com/300x200/?starwars,${person.name}`}
              title={person.name}
              body={`Height: ${person.height}`}
            />

            // <div className={styles.card} key={index}>
            //   <div className={styles.cardImage}>
            //     <img
            //       src={`https://source.unsplash.com/300x200/?starwars,${person.name}`}
            //       alt={person.name}
            //       className={styles.image}
            //     />
            //   </div>
            //   <h3 className={styles.cardTitle}>{person.name}</h3>
            //   <p className={styles.cardBody}>Height: {person.height}</p>
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

export default PeoplePage;