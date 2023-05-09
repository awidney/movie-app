function Genres({ movieInfo }) {
  return (
    <p className='text-sm lg:text-base'>
      {movieInfo?.genres.map((genre) => (
        <span
          key={genre.id}
          className='mb-2 mr-2 inline-block flex-1 rounded-full border border-accent px-2 py-[0.125rem]'
        >
          {genre.name}
        </span>
      ))}
    </p>
  );
}

export default Genres;
