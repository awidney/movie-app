import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import CardCategory from '../components/CardCategory';

function NowPlaying() {
  const [currentPage, setCurrentPage] = useState(1);
  const [allMovies, setAllMovies] = useState([]);
  const [shouldFetch, setShouldFetch] = useState(false);

  const { data: nowPlaying } = useQuery(
    ['popularMovies', currentPage],
    async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=e1eb6a4fd746d268382a20cd605740a8&page=${currentPage}`
      );
      return response.data;
    },
    { keepPreviousData: true, enabled: shouldFetch }
  );

  useEffect(() => {
    if (nowPlaying?.results) {
      setAllMovies((prevMovies) => [...prevMovies, ...nowPlaying.results]);
    }
  }, [nowPlaying]);

  useEffect(() => {
    setShouldFetch(true);
    return () => {
      setCurrentPage(1);
      setAllMovies([]);
    };
  }, []);

  const handleViewMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <section>
      <h2>Now Playing Movies</h2>
      <div className='grid grid-cols-2 gap-4 py-2 categoryGridSmall:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 2xl:gap-10'>
        {allMovies.map((movie) => (
          <CardCategory
            key={movie.id}
            title={movie.title}
            poster={movie.poster_path}
            releaseDate={movie.release_date.slice(0, 4)} // show the year only
            rating={movie.vote_average.toFixed(1) * 10}
            id={movie.id}
          />
        ))}
      </div>
      <button
        className=' mt-4 w-full rounded bg-blue-500 px-4 py-2 text-white'
        onClick={handleViewMore}
      >
        View More
      </button>
    </section>
  );
}

export default NowPlaying;
