import { Link } from 'react-router-dom';

function CardUpcoming({ poster, title, releaseDate, id }) {
  const posterUrl = `https://image.tmdb.org/t/p/w780${poster}`;

  const formattedUrlTitle = title
    .toLowerCase()
    .replace(/[^a-zA-Z0-9\s]/g, '') // remove non-alphanumeric characters excluding spaces
    .replace(/\s+/g, '-'); // replace spaces with dashes

  return (
    <div className='relative my-2'>
      <Link to={`/movie/${id}/${formattedUrlTitle}`}>
        <div className='h-[280px] w-[185px] md:h-[460px] md:w-[300px]'>
          <img
            className='h-full w-full rounded-lg object-cover'
            src={posterUrl}
            alt={title}
          />
        </div>
      </Link>
      <div className='mt-2 max-w-[185px] md:max-w-[300px]'>
        <p className='font-Poppins text-xs md:text-base'>{releaseDate}</p>
        <Link to={`/movie/${id}/${formattedUrlTitle}`}>
          <h3 className='font-Poppins text-sm font-bold md:text-xl'>{title}</h3>
        </Link>
      </div>
    </div>
  );
}

export default CardUpcoming;
