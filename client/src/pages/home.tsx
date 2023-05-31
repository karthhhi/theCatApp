import React, { useState, useEffect } from 'react';
import styles from './home.module.scss';
import Card from '@components/Card';
import SearchBox from '@components/Input';
import { getAllCats } from '@services/cat-api';

export default function Home() {
  const [allCats, setAllCats] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { cats } = await getAllCats();
      setAllCats(cats as []);
    }
    fetchData();
  }, []);

  const {
    home__container,
    home__itemContainer,
    home__dataItem
  } = styles;

  return (
    <div className={home__container}>
      <SearchBox />
      <div className={home__itemContainer}>
        {allCats.map(({ name, weight, breed }) => (
          <Card
            title={name}
            description={
              <>
                <div className={home__dataItem}>Breed: {breed}</div>
                <div className={home__dataItem}>Weight: {weight}</div>
              </>
            }
          />))
        }
      </div>
    </div>
    );
}
