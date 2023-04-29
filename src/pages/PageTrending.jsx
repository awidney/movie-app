import React, { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import CardCategory from '../components/CardCategory';

function PageTrending() {
  const [moviesToShow, setMoviesToShow] = useState(10);
  const { data: trendingMovies } = useQuery({
    queryKey: 'trendingMovies',
    queryFn: async () => {
      const response = await axios.get(
        'https://api.themoviedb.org/3/trending/movie/week?api_key=e1eb6a4fd746d268382a20cd605740a8'
      );
      return response.data;
    },
  });

  const handleViewMore = () => {
    setMoviesToShow(moviesToShow + 10);
  };

  return (
    <section>
      <h2>Trending Movies</h2>
      <div className='grid grid-cols-2 gap-4 py-2 categoryGridSmall:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 2xl:gap-10'>
        {trendingMovies?.results.slice(0, moviesToShow).map((movie) => (
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

export default PageTrending;
