import { useQuery } from 'react-query';
import axios from 'axios';
import Cast from '../components/Cast';
import Trailer from '../components/Trailer';
import Genres from '../components/Genres';
import SinglePoster from '../components/SinglePoster';
import { useParams } from 'react-router-dom';
import { API_KEY } from '../global/globals';
import actorPlaceHolder from '../assets/actor-placeholder.png';
import { useState, useEffect } from 'react';

function MovieInfo() {
  const { id } = useParams();

  const [isFavourite, setIsFavourite] = useState(
    JSON.parse(localStorage.getItem('favourites') || '[]').includes(
      parseInt(id)
    )
  );

  const {
    data: movieInfo,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['movieInfo', id], // Add the id to the query key
    queryFn: async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos,credits`
      );
      return response.data;
    },
    staleTime: 0, // Add this line to set the staleTime to 0
  });

  useEffect(() => {
    if (isLoading) {
      document.title = 'Loading Movie — NA Films';
    } else if (isError) {
      document.title = 'Error — NA Films';
    } else if (movieInfo) {
      const releaseYear = movieInfo.release_date
        ? movieInfo.release_date.slice(0, 4)
        : '';
      const titleYearPart = releaseYear ? ` (${releaseYear})` : '';
      const movieTitle = movieInfo.title || 'Untitled Movie';
      document.title = `${movieTitle}${titleYearPart} — NA Films`;
    }
    return () => {
      document.title = 'NA Films';
    };
  }, [movieInfo, isLoading, isError]);

  const toggleFavourite = () => {
    const favourites = JSON.parse(localStorage.getItem('favourites')) || [];
    const index = favourites.indexOf(parseInt(id));
    if (index === -1) {
      favourites.push(parseInt(id));
    } else {
      favourites.splice(index, 1);
    }
    localStorage.setItem('favourites', JSON.stringify(favourites));
    setIsFavourite((prevIsFavourite) => !prevIsFavourite);
  };

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
          onClick={toggleFavourite}
          className='h-8 w-8 cursor-pointer lg:h-10 lg:w-10'
          src={isFavourite ? '../../fav.svg' : '../../add-fav.svg'}
          alt='Add to favorites button'
        />
      </div>

      {movieInfo.release_date || runtime ? (
        <div className='mt-2 flex gap-4 lg:text-xl'>
          {movieInfo.release_date && (
            <p>{movieInfo.release_date.slice(0, 4)}</p>
          )}
          {runtime !== 0 && <p>{`${hours}h ${minutes}m`}</p>}
        </div>
      ) : null}

      <div className='mb-16 grid gap-4 sm:grid-cols-[1fr_3fr]'>
        <Trailer key={trailerKey} trailerKey={trailerKey} />
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
