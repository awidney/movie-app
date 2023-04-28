import { useQuery } from 'react-query';
import axios from 'axios';
import RatingBar from './RatingBar';
import Cast from './Cast';
import Trailer from './Trailer';
import Genres from './Genres';

function MovieInfo() {
  const posterUrl = 'https://image.tmdb.org/t/p/w780';

  const { data: movieInfo } = useQuery({
    queryKey: 'movieInfo',
    queryFn: async () => {
      const response = await axios.get(
        'https://api.themoviedb.org/3/movie/436270?api_key=e1eb6a4fd746d268382a20cd605740a8&append_to_response=videos,credits'
      );
      return response.data;
    },
  });

  let trailerKey = '';

  for (let i = 0; i < movieInfo?.videos.results.length; i++) {
    if (movieInfo.videos.results[i].type === 'Trailer') {
      trailerKey = movieInfo.videos.results[i].key;
      break;
    }
  }

  const runtime = movieInfo?.runtime;
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  return (
    <div className='relative'>
      <section>
        <div className='flex justify-between gap-4'>
          <h1 className='font-Inter text-2xl'>{movieInfo?.title}</h1>
          <img
            className='h-8 w-8'
            src='../../bookmark-add.svg'
            alt='Add to favorites button'
          />
        </div>
        <div className='flex gap-4 '>
          <p>{movieInfo?.release_date.slice(0, 4)}</p>
          <p>{`${hours}h ${minutes}m`}</p>
        </div>
        <Trailer trailerKey={trailerKey} />
        <div className='my-12 flex gap-4'>
          <div className='relative h-[180px] w-[120px] flex-shrink-0'>
            <img
              className='h-full w-full rounded-lg object-cover'
              src={`${posterUrl}${movieInfo?.poster_path}`}
              alt={movieInfo?.title}
            />
            <RatingBar rating={movieInfo?.vote_average.toFixed(1) * 10} />
          </div>
          <div className='w-30 flex flex-col gap-4'>
            <Genres movieInfo={movieInfo} />
            <p className='flex-1 text-sm'>{movieInfo?.overview}</p>
          </div>
        </div>
      </section>
      <section>
        <h2>Top Billed Cast</h2>
        <div className='h-scroll my-4 flex gap-4 pb-4 pt-2'>
          {movieInfo?.credits.cast.slice(0, 10).map((cast) => (
            <Cast
              key={cast.id}
              profilePath={cast.profile_path}
              name={cast.name}
              character={cast.character}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default MovieInfo;
