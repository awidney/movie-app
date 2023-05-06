import RatingBar from './RatingBar';
import placeHolder from '../assets/vertical-placeholder.png';

function SinglePoster({ movieInfo }) {
  const posterUrl = 'https://image.tmdb.org/t/p/w780';
  const imageUrl = movieInfo?.poster_path
    ? `${posterUrl}${movieInfo.poster_path}`
    : placeHolder;

  return (
    <div className='relative h-[180px] w-[120px] sm:row-start-1 sm:mt-4 sm:h-[calc(100%-2rem)] sm:w-full'>
      <img
        className='h-full w-full rounded-lg object-cover sm:rounded-none'
        src={imageUrl}
        alt={movieInfo?.title}
      />
      <RatingBar rating={movieInfo?.vote_average.toFixed(1) * 10} />
    </div>
  );
}

export default SinglePoster;
