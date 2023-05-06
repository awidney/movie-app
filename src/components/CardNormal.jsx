import RatingBar from './RatingBar';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import placeHolder from '../assets/vertical-placeholder.png';

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
    <div className='my-2'>
      <Link to={`/movie/${id}/${formattedUrlTitle}`} className='block w-fit'>
        <div className='relative h-[190px] w-[120px] md:h-[240px] md:w-[180px] lg:w-[190px] 2xl:w-[180px]'>
          <img
            className='h-full w-full object-cover'
            src={poster ? posterUrl : placeHolder}
            alt={title}
          />
          <RatingBar rating={rating} />
        </div>
      </Link>
      <div className='relative mt-2 inline-block w-[120px] md:w-[180px]'>
        <p className='font-Poppins text-xs md:text-base'>{releaseDate}</p>
        <Link
          to={`/movie/${id}/${formattedUrlTitle}`}
          className='block max-w-[75%]'
        >
          <h3 className='font-Poppins text-xs font-bold md:text-lg'>{title}</h3>
        </Link>
        <img
          onClick={toggleFavourite}
          className={`absolute right-0 top-0 w-6 filter md:w-7 ${
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
