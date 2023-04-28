import { useQuery } from 'react-query';
import axios from 'axios';
import CardTopRated from './CardTopRated';

function TopRated() {
  const { data: topRated } = useQuery({
    queryKey: 'topRated',
    queryFn: async () => {
      const response = await axios.get(
        'https://api.themoviedb.org/3/movie/top_rated?api_key=e1eb6a4fd746d268382a20cd605740a8'
      );
      return response.data;
    },
  });

  return (
    <section className='mt-6'>
      <h2>Top Rated</h2>
      <div className='h-scroll'>
        <div className='flex min-w-max gap-4 py-2 md:gap-8'>
          {topRated?.results.slice(0, 10).map((movie) => (
            <CardTopRated
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

export default TopRated;
