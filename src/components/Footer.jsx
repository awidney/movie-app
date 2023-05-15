import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='px-4 py-8 lg:mx-auto xl:w-[67.5rem] 2xl:w-[87rem]'>
      <div className='justify-center gap-36 md:flex'>
        <section>
          <div className='mt-9 flex justify-center'>
            <img
              className='h-[3.75rem]'
              src='nafilms5.svg'
              alt='NA Films Logo'
            />
          </div>
          <div className='mx-auto mt-8 flex w-[115px] justify-between'>
            <a href='https://www.instagram.com'>
              <img
                className='w-8'
                src='instagram.svg'
                alt='Instagram Logo Link'
              />
            </a>
            <a href='https://www.facebook.com'>
              <img
                className='w-8'
                src='facebook.svg'
                alt='Facebook Logo Link'
              />
            </a>
            <a href='https://www.twitter.com'>
              <img className='w-8' src='twitter.svg' alt='Twitter Logo Link' />
            </a>
          </div>
        </section>
        <section className='mt-10 flex justify-center gap-12'>
          <div>
            <nav>
              <ul className='flex flex-col gap-2 lg:text-lg'>
                <li>
                  <Link to='/nafilms'>Home</Link>
                </li>
                <li>
                  <Link to='/nafilms/about'>About</Link>
                </li>
                <li>
                  <Link to='/nafilms/favourites'>Favourites</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <nav>
              <ul className='flex flex-col gap-2 lg:text-lg'>
                <li>
                  <Link to='/nafilms/movie/trending'>Trending</Link>
                </li>
                <li>
                  <Link to='/nafilms/movie/popular'>Popular</Link>
                </li>
                <li>
                  <Link to='/nafilms/movie/top-rated'>Top Rated</Link>
                </li>
                <li>
                  <Link to='/nafilms/movie/now-playing'>Now Playing</Link>
                </li>
                <li>
                  <Link to='/nafilms/movie/upcoming'>Upcoming</Link>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </div>

      <p className='mt-12 text-center'>&#169;2023 | N/A Films</p>
    </footer>
  );
}

export default Footer;
