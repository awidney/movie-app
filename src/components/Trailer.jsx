function Trailer({ trailerKey }) {
  return (
    <div className='col-span-2 sm:col-start-2'>
      <div className='relative my-4 h-0 w-full pb-[56.25%]'>
        <iframe
          className='absolute left-0 top-0 h-full w-full'
          src={`https://www.youtube.com/embed/${trailerKey}`}
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Trailer;
