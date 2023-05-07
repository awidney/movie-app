import RatingBar from './RatingBar';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import placeHolder from '../assets/vertical-placeholder.png';

function CardCategory({
  poster,
  title,
  releaseDate,
  rating,
  id,
  onToggleFavourite,
}) {
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
    onToggleFavourite && onToggleFavourite();
  };

  useEffect(() => {
    const favourites = JSON.parse(localStorage.getItem('favourites')) || [];
    setIsFavourite(favourites.includes(id));
  }, [id]);

  const posterUrl = poster ? `https://image.tmdb.org/t/p/w780${poster}` : '';

  const formattedUrlTitle = title
    .toLowerCase()
    .replace(/[^a-zA-Z0-9\s]/g, '') // remove non-alphanumeric characters excluding spaces
    .replace(/\s+/g, '-'); // replace spaces with dashes

  return (
    <div>
      <Link to={`/movie/${id}/${formattedUrlTitle}`}>
        <div className='relative'>
          <img
            className='h-full w-full object-cover'
            src={posterUrl || placeHolder}
            alt={title}
          />
          <RatingBar rating={rating} />
        </div>
      </Link>
      <div className='relative mt-2'>
        <p className='font-Poppins text-xs md:text-base'>{releaseDate}</p>
        <Link
          to={`/movie/${id}/${formattedUrlTitle}`}
          className='block max-w-[80%]'
        >
          <h3 className='font-Poppins text-sm font-bold md:text-xl'>{title}</h3>
        </Link>
        <img
          onClick={toggleFavourite}
          className='absolute right-0 top-0 w-6 cursor-pointer'
          src={isFavourite ? '../fav.svg' : '../add-fav.svg'}
          alt='Add to favourites icon'
        />
      </div>
    </div>
  );
}

export default CardCategory;
