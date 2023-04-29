import RatingBar from './RatingBar';
import { Link } from 'react-router-dom';

function CardCategory({ poster, title, releaseDate, rating, id }) {
  const posterUrl = `https://image.tmdb.org/t/p/w780${poster}`;

  const formattedUrlTitle = title
    .toLowerCase()
    .replace(/[^a-zA-Z0-9\s]/g, '') // remove non-alphanumeric characters excluding spaces
    .replace(/\s+/g, '-'); // replace spaces with dashes

  return (
    <div>
      <Link to={`/movie/${id}/${formattedUrlTitle}`}>
        <div className='relative'>
          <img
            className='h-full w-full rounded-lg object-cover'
            src={posterUrl}
            alt={title}
          />
          <RatingBar rating={rating} />
        </div>
      </Link>
      <div className='mt-2'>
        <p className='font-Poppins text-xs md:text-base'>{releaseDate}</p>
        <Link to={`/movie/${id}/${formattedUrlTitle}`}>
          <h3 className='font-Poppins text-sm font-bold md:text-xl'>{title}</h3>
        </Link>
      </div>
    </div>
  );
}

export default CardCategory;
