import { useQuery } from 'react-query';
import axios from 'axios';
import CardNormal from './CardNormal';
import { Link } from 'react-router-dom';
import { API_KEY } from '../global/globals';

function Popular() {
  const { data: popularMovies } = useQuery({
    queryKey: 'popularMovies',
    queryFn: async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      );
      return response.data;
    },
  });

  return (
    <section className='mt-6'>
      <div className='flex items-baseline justify-between'>
        <h2>Popular</h2>
        <Link
          className='text-xs text-pink-200 md:text-base'
          to='/movie/popular'
        >
          View More
        </Link>
      </div>
      <div className='h-scroll overflow-x-scroll'>
        <div className='flex min-w-max gap-4 py-2 md:gap-8'>
          {popularMovies?.results.map((movie) => (
            <CardNormal
              key={movie.id}
              title={movie.title}
              poster={movie.backdrop_path}
              releaseDate={movie.release_date.slice(0, 4)} // show the year only
              rating={movie.vote_average.toFixed(1) * 10}
              id={movie.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Popular;
