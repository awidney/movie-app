import RatingBar from './RatingBar';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function CardCategory({ poster, title, releaseDate, rating, id }) {
  const [isFavourite, setIsFavourite] = useState(false);

  const toggleFavourite = () => {
    // get favourites from local storage or return an empty array
    const favourites = JSON.parse(localStorage.getItem('favourites')) || [];
    const index = favourites.indexOf(id);
    if (index === -1) {
      // if movie is not in favourites
      favourites.push(id);
    } else {
      // if movie is in favourites, remove it
      favourites.splice(index, 1);
    }
    // save favourites to local storage
    localStorage.setItem('favourites', JSON.stringify(favourites));
    setIsFavourite((prevIsFavourite) => !prevIsFavourite); // toggle isFavourite
  };

  // check if movie is in favourites on mount
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

export default CardCategory;
