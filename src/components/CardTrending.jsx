import RatingBar from './RatingBar';

function CardTrending({ poster, title, releaseDate, rating }) {
  const posterUrl = `https://image.tmdb.org/t/p/w300${poster}`;

  return (
    <div className='relative my-2'>
      <div className='h-[140px] w-[240px]'>
        <img
          className='h-full w-full rounded-lg object-cover opacity-60'
          src={posterUrl}
          alt={title}
        />
      </div>
      <div className='absolute bottom-0 mb-2 ml-4'>
        <p className='font-Poppins text-xs'>{releaseDate}</p>
        <h3 className='max-w-[240px] font-Poppins text-sm font-bold'>
          {title}
        </h3>
      </div>
      <RatingBar rating={rating} />
    </div>
  );
}

export default CardTrending;
