import { useQuery } from 'react-query';
import axios from 'axios';
import CardTrending from './CardTrending';

function Trending() {
  const { data: trendingMovies } = useQuery({
    queryKey: 'trendingMovies',
    queryFn: async () => {
      const response = await axios.get(
        'https://api.themoviedb.org/3/trending/movie/week?api_key=e1eb6a4fd746d268382a20cd605740a8'
      );
      return response.data;
    },
  });

  return (
    <section>
      <div className='flex items-baseline justify-between'>
        <h2>Trending</h2>
        <a className='text-xs text-pink-200 md:text-base' href='/'>
          View More
        </a>
      </div>
      <div className='h-scroll'>
        <div className='flex min-w-max gap-4 py-2 md:gap-8'>
          {trendingMovies?.results.slice(0, 10).map((movie) => (
            <CardTrending
              key={movie.id}
              title={movie.title}
              poster={movie.backdrop_path}
              releaseDate={movie.release_date.slice(0, 4)} // show the year only
              rating={movie.vote_average.toFixed(1) * 10}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trending;
