function Cast({ profilePath, name, character }) {
  const profileUrl = `https://image.tmdb.org/t/p/w185${profilePath}`;

  return (
    <div className='cast-item min-w-[120px]'>
      <img
        className='h-36 w-full rounded-t-md object-cover'
        src={profileUrl}
        alt={name}
      />
      <div className='w-full overflow-hidden rounded-b-md bg-white p-2 text-black'>
        <h3 className='font-Inter font-bold leading-snug tracking-tight'>
          {name}
        </h3>
        <p className='text-xs'>{character}</p>
      </div>
    </div>
  );
}

export default Cast;
