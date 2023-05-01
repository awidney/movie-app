import RatingBar from './RatingBar';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function CardNormal({ poster, title, releaseDate, rating, id }) {
  const [isFavourite, setIsFavourite] = useState(false);

  const toggleFavourite = () => {
    const favourites = JSON.parse(localStorage.getItem('favourites')) || [];
    const index = favourites.indexOf(id);
    if (index === -1) {
      favourites.push(id);
    } else {
      favourites.splice(index, 1);
    }
    localStorage.setItem('favourites', JSON.stringify(favourites));
    setIsFavourite((prevIsFavourite) => !prevIsFavourite);
  };

  useEffect(() => {
    const favourites = JSON.parse(localStorage.getItem('favourites')) || [];
    setIsFavourite(favourites.includes(id));
  }, [id]);

  const posterUrl = `https://image.tmdb.org/t/p/w780${poster}`;

  const formattedUrlTitle = title
    .toLowerCase()
    .replace(/[^a-zA-Z0-9\s]/g, '') // remove non-alphanumeric characters excluding spaces
    .replace(/\s+/g, '-'); // replace spaces with dashes

  return (
    <div className='relative my-2'>
      <Link to={`/movie/${id}/${formattedUrlTitle}`}>
        <div className='h-[190px] w-[120px] md:h-[240px] md:w-[180px]'>
          <img
            className='h-full w-full rounded-lg object-cover'
            src={posterUrl}
            alt={title}
          />
        </div>
        <RatingBar rating={rating} />
      </Link>
      <div className='relative mt-2 w-[120px] md:w-[180px]'>
        <p className='font-Poppins text-xs md:text-base'>{releaseDate}</p>
        <Link
          to={`/movie/${id}/${formattedUrlTitle}`}
          className='block max-w-[75%]'
        >
          <h3 className='font-Poppins text-xs font-bold md:text-lg'>{title}</h3>
        </Link>
        <img
          onClick={toggleFavourite}
          className={`absolute right-0 top-0 w-6 filter ${
            isFavourite ? 'invert' : ''
          }`}
          src='../bookmark-add.svg'
          alt='Add to favourites icon'
        />
      </div>
    </div>
  );
}

export default CardNormal;
