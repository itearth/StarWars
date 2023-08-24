import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../generics/Navbar/navbar';
import styles from '../PeoplePage/people.module.scss';
import { BarLoader } from 'react-spinners';
import { peopleActions } from '../../../redux/slices/star.slice'; // Update the path accordingly
import { fetchPeople } from '../../../services/starService';


function PeoplePage() {

  const dispatch = useDispatch();
  const { people, loading } = useSelector((state) => state.peopleState);
  const itemsPerPage = 6; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchPeople());
  }, [currentPage]);

  async function loadPeople() {
    dispatch(peopleActions.setLoading(true));
    try {
      const data = await fetchPeople(dispatch);
      dispatch(peopleActions.setPeople(data));
    } catch (exception) {
      // Handle error
    } finally {
      dispatch(peopleActions.setLoading(false));
    }
  }

   // Calculate the indices for pagination
   const lastIndex = currentPage * itemsPerPage;
   const firstIndex = lastIndex - itemsPerPage;
   const displayedPeople = people.slice(firstIndex, lastIndex);
 
   const totalPages = Math.ceil(people.length / itemsPerPage);
 
   const handlePrevious = () => {
     if (currentPage > 1) {
       setCurrentPage(currentPage - 1);
     }
   };
 
   const handleNext = () => {
     if (currentPage < totalPages) {
       setCurrentPage(currentPage + 1);
     }
   };

   

  return (
    <div className={styles.pageContainer}>
      <Navbar />
      {loading ? (
        <div className={styles.loadingContainer}>
          <BarLoader color="#142d4c" loading={loading} />
        </div>
      ) : (
        <div className={`${styles.cardsContainer} ${styles.marginTop}`}>
            {displayedPeople.map((person, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.cardImage}>
                <img
                  src={`https://source.unsplash.com/300x200/?starwars,${person.name}`}
                  alt={person.name}
                  className={styles.image}
                />
              </div>
              <h3 className={styles.cardTitle}>{person.name}</h3>
              <p className={styles.cardBody}>Height: {person.height}</p>
              <button className={styles.cardButton}>Action</button>
            </div>
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
