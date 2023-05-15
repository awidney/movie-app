import RatingBar from './RatingBar';
import { Link } from 'react-router-dom';
import { PUBLIC_URL } from '../global/globals';

function CardTrending({ poster, title, releaseDate, rating, id }) {
  const posterUrl = `https://image.tmdb.org/t/p/w780${poster}`;
  const placeHolder = `${PUBLIC_URL}/assets/horizontal-placeholder.png`;
  const formattedUrlTitle = title
    .toLowerCase()
    .replace(/[^a-zA-Z0-9\s]/g, '') // remove non-alphanumeric characters excluding spaces
    .replace(/\s+/g, '-'); // replace spaces with dashes

  return (
    <Link to={`/nafilms/movie/${id}/${formattedUrlTitle}`}>
      <div className='relative my-2 inline-block w-[180px] cursor-pointer md:w-auto'>
        <div className='h-[105px] md:h-[170px] md:w-[325px]'>
          <img
            className='h-full w-full object-cover opacity-60'
            src={poster ? posterUrl : placeHolder}
            alt={title}
          />
        </div>
        <div className='absolute bottom-0 mb-1 ml-2 md:mb-2 md:ml-4'>
          <p className='font-Poppins text-xs md:text-base'>{releaseDate}</p>
          <h3 className='font-Inter text-xs font-bold md:max-w-[308px] md:text-xl'>
            {title}
          </h3>
        </div>
        <RatingBar rating={rating} />
      </div>
    </Link>
  );
}

export default CardTrending;
