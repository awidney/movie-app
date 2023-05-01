import RatingBar from './RatingBar';
import { Link } from 'react-router-dom';

function CardTrending({ poster, title, releaseDate, rating, id }) {
  const posterUrl = `https://image.tmdb.org/t/p/w780${poster}`;

  const formattedUrlTitle = title
    .toLowerCase()
    .replace(/[^a-zA-Z0-9\s]/g, '') // remove non-alphanumeric characters excluding spaces
    .replace(/\s+/g, '-'); // replace spaces with dashes

  return (
    <Link to={`/movie/${id}/${formattedUrlTitle}`}>
      <div className='relative my-2 cursor-pointer'>
        <div className='h-[105px] w-[180px] md:h-[170px] md:w-[350px]'>
          <img
            className='h-full w-full rounded-lg object-cover opacity-60'
            src={posterUrl}
            alt={title}
          />
        </div>
        <div className='absolute bottom-0 mb-1 ml-2 md:mb-2 md:ml-4'>
          <p className='font-Poppins text-xs md:text-base'>{releaseDate}</p>
          <h3 className='font-Inter text-xs font-bold md:max-w-[470px] md:text-xl'>
            {title}
          </h3>
        </div>
        <RatingBar rating={rating} />
      </div>
    </Link>
  );
}

export default CardTrending;
