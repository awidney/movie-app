import { useQuery } from 'react-query';
import axios from 'axios';
import CardNormal from './CardNormal';
import { Link } from 'react-router-dom';

function NowPlaying() {
  const { data: nowPlaying } = useQuery({
    queryKey: 'nowPlaying',
    queryFn: async () => {
      const response = await axios.get(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=e1eb6a4fd746d268382a20cd605740a8'
      );
      return response.data;
    },
  });

  return (
    <section className='mt-6'>
      <div className='flex items-baseline justify-between'>
        <h2>Now Playing</h2>
        <Link
          className='text-xs text-pink-200 md:text-base'
          to='movie/now-playing'
        >
          View More
        </Link>
      </div>
      <div className='h-scroll overflow-x-scroll'>
        <div className='flex min-w-max gap-4 py-2 md:gap-8'>
          {nowPlaying?.results.slice(0, 10).map((movie) => (
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

export default NowPlaying;
