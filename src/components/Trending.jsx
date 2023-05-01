import { useQuery } from 'react-query';
import axios from 'axios';
import CardTrending from './CardTrending';
import { Link } from 'react-router-dom';
import { API_KEY } from '../global/globals';

function Trending() {
  const { data: trendingMovies } = useQuery({
    queryKey: 'trendingMovies',
    queryFn: async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
      );
      return response.data;
    },
  });

  return (
    <section>
      <div className='flex items-baseline justify-between'>
        <h2>Trending</h2>
        <Link
          to='/movie/trending'
          className='text-xs text-pink-200 md:text-base'
        >
          View More
        </Link>
      </div>
      <div className='h-scroll overflow-x-scroll'>
        <div className='flex min-w-max gap-4 py-2 md:gap-8'>
          {trendingMovies?.results.map((movie) => (
            <CardTrending
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

export default Trending;
