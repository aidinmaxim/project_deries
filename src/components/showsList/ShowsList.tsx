import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchShows } from "../../features/shows/showsAction";
import ShowItem from '../showItem/ShowItem';
import { AppDispatch, RootState } from "../../app/store"
import styles from './ShowsList.module.css'

const ShowsList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { shows, loading, error } = useSelector((state: RootState) => state.shows);

  useEffect(() => {
    dispatch(fetchShows());
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="container">
        <div className="grid">

          {shows.map((show) => (
            <ShowItem key={show.id} show={show} />
          ))}
        </div>
      </div>
    </div>


  );
};

export default ShowsList;