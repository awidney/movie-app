import RatingBar from './RatingBar';

function CardPopular({ poster, title, releaseDate, rating }) {
  const posterUrl = `https://image.tmdb.org/t/p/w780${poster}`;

  return (
    <div className='relative my-2 cursor-pointer'>
      <div className='h-[280px] w-[185px]'>
        <img
          className='h-full w-full rounded-lg object-cover opacity-60'
          src={posterUrl}
          alt={title}
        />
      </div>
      <div className='absolute bottom-0 mb-2 ml-2 mr-2'>
        <p className='font-Poppins text-xs md:text-base'>{releaseDate}</p>
        <h3 className='max-w-[240px] font-Poppins text-sm font-bold md:max-w-[470px] md:text-xl'>
          {title}
        </h3>
      </div>
      <RatingBar rating={rating} />
    </div>
  );
}

export default CardPopular;
