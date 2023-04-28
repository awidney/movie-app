function CardUpcoming({ poster, title, releaseDate }) {
  const posterUrl = `https://image.tmdb.org/t/p/w780${poster}`;

  return (
    <div className='relative my-2 cursor-pointer'>
      <div className='h-[280px] w-[185px] md:h-[460px] md:w-[300px]'>
        <img
          className='h-full w-full rounded-lg object-cover opacity-60'
          src={posterUrl}
          alt={title}
        />
      </div>
      <div className='mt-2 max-w-[185px] md:max-w-[300px]'>
        <p className='font-Poppins text-xs md:text-base'>{releaseDate}</p>
        <h3 className='font-Inter text-sm font-bold md:text-xl'>{title}</h3>
      </div>
    </div>
  );
}

export default CardUpcoming;
