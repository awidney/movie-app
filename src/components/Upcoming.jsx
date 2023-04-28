import { useQuery } from 'react-query';
import axios from 'axios';
import CardNormal from './CardNormal';

function Upcoming() {
  const { data: upcomingMovies } = useQuery({
    queryKey: 'upcomingMovies',
    queryFn: async () => {
      const response = await axios.get(
        'https://api.themoviedb.org/3/movie/upcoming?api_key=e1eb6a4fd746d268382a20cd605740a8&region=US|CA'
      );
      return response.data;
    },
  });

  return (
    <section className='mt-6'>
      <h2>Upcoming</h2>
      <div className='h-scroll'>
        <div className='flex min-w-max gap-4 py-2 md:gap-8'>
          {upcomingMovies?.results.slice(0, 10).map((movie) => (
            <CardNormal
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

export default Upcoming;
