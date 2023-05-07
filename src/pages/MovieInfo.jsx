import { useQuery } from 'react-query';
import axios from 'axios';
import Cast from '../components/Cast';
import Trailer from '../components/Trailer';
import Genres from '../components/Genres';
import SinglePoster from '../components/SinglePoster';
import { useParams } from 'react-router-dom';
import { API_KEY } from '../global/globals';
import actorPlaceHolder from '../assets/actor-placeholder.png';

function MovieInfo() {
  const { id } = useParams();

  const {
    data: movieInfo,
    isLoading,
    isError,
  } = useQuery({
    queryKey: 'movieInfo',
    queryFn: async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos,credits`
      );
      return response.data;
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching movie info</div>;
  }

  let trailerKey = '';

  for (let i = 0; i < movieInfo.videos.results.length; i++) {
    if (movieInfo.videos.results[i].type === 'Trailer') {
      trailerKey = movieInfo.videos.results[i].key;
      break;
    }
  }

  const runtime = movieInfo.runtime;
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  return (
    <div className='relative'>
      <div className='flex justify-between gap-4'>
        <h1 className='font-Inter text-2xl md:text-4xl'>{movieInfo.title}</h1>
        <img
          className='h-8 w-8'
          src='../../bookmark-add.svg'
          alt='Add to favorites button'
        />
      </div>

      <div className='mt-2 flex gap-4 lg:text-xl'>
        <p>{movieInfo.release_date.slice(0, 4)}</p>
        <p>{`${hours}h ${minutes}m`}</p>
      </div>

      <div className='mb-16 grid gap-4 sm:grid-cols-[1fr_3fr]'>
        <Trailer trailerKey={trailerKey} />
        <SinglePoster movieInfo={movieInfo} />
        <div className='w-30 flex flex-col gap-4 sm:col-span-2'>
          <Genres movieInfo={movieInfo} />
          <p className='flex-1 text-sm lg:text-base'>{movieInfo.overview}</p>
        </div>
      </div>

      <section>
        <h2>Top Billed Cast</h2>
        <div className='h-scroll my-4 flex gap-4 overflow-x-scroll pb-4 pt-2'>
          {movieInfo.credits.cast.slice(0, 10).length > 0 ? (
            movieInfo.credits.cast
              .slice(0, 10)
              .map((cast) => (
                <Cast
                  key={cast.id}
                  profilePath={cast.profile_path}
                  name={cast.name}
                  character={cast.character}
                  placeholder={actorPlaceHolder}
                />
              ))
          ) : (
            <div>To be featured...</div>
          )}
        </div>
      </section>
    </div>
  );
}

export default MovieInfo;
