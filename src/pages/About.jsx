import React from 'react';

function About() {
  return (
    <section>
      <h2>About</h2>
      <div className='justify-between gap-6 md:flex'>
        <p className='max-w-xl py-2'>
          N/A Films is an online movie database that lets you track your
          favorite films. Browse our collection of trending, popular, top-rated,
          upcoming, and now playing titles, and get detailed information on each
          movie, including cast, and plot summaries. Our user-friendly platform
          is designed for movie enthusiasts, and we are committed to delivering
          reliable and accurate information. Join us today and discover a new
          world of movie entertainment.
        </p>
        <br />
        <p className='md:max-w-md md:text-right'>
          *This product uses the TMDb API but is not endorsed or certified by
          TMDb.
          <img
            className='mx-auto mt-5 w-16'
            src='/tmdbicon.svg'
            alt='TMDB Icon'
          />
        </p>
      </div>
    </section>
  );
}

export default About;
