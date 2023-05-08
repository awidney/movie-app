import React, { useEffect } from 'react';

function About() {
  useEffect(() => {
    document.title = 'About — NA Films';
    return () => {
      document.title = 'NA Films';
    };
  }, []);
  return (
    <section>
      <h2 className='text-center'>About</h2>
      <p className='mx-auto max-w-xl py-2 text-center'>
        N/A Films is an online movie database that lets you track your favorite
        films. Browse our collection of trending, popular, top-rated, upcoming,
        and now playing titles, and get detailed information on each movie,
        including cast, and plot summaries. Our user-friendly platform is
        designed for movie enthusiasts, and we are committed to delivering
        reliable and accurate information. Join us today and discover a new
        world of movie entertainment.
      </p>
      <br />
      <p className='mx-auto text-center'>
        *This product uses the TMDb API but is not endorsed or certified by
        TMDb.
        <img
          className='mx-auto mt-5 w-16'
          src='/tmdbicon.svg'
          alt='TMDB Icon'
        />
      </p>
    </section>
  );
}

export default About;
