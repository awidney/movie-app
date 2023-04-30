import React from 'react';
import instagramIcon from '../icons/instagram.svg';
import facebookIcon from '../icons/facebook.svg';
import twitterIcon from '../icons/twitter.svg';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='mx-auto my-8 px-4 xl:w-[67.5rem] 2xl:w-[87rem]'>
      <div className='justify-center gap-36 md:flex'>
        <section>
          <div className='flex justify-center'>
            <img
              className='h-[3.75rem]'
              src='/nafilms5.svg'
              alt='NA Films Logo'
            />
          </div>
          <div className='mt-8 flex justify-center gap-4'>
            <a href='https://www.instagram.com'>
              <img
                className='w-8'
                src={instagramIcon}
                alt='Instagram Logo Link'
              />
            </a>
            <a className='drop-shadow-2xl' href='https://www.facebook.com'>
              <img
                className='w-8'
                src={facebookIcon}
                alt='Facebook Logo Link'
              />
            </a>
            <a href='https://www.twitter.com'>
              <img className='w-8' src={twitterIcon} alt='Twitter Logo Link' />
            </a>
          </div>
        </section>
        <section className='mt-10 flex justify-center gap-12'>
          <div>
            <nav>
              <ul className='flex flex-col gap-2'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to={'/favourites'}>Favourites</Link>
              </ul>
            </nav>
          </div>
          <div>
            <nav>
              <ul className='flex flex-col gap-2'>
                <li>
                  <Link to='/movie/trending'>Trending</Link>
                </li>
                <li>
                  <Link to='/movie/popular'>Popular</Link>
                </li>
                <li>
                  <Link to='/movie/top-rated'>Top Rated</Link>
                </li>
                <li>
                  <Link to='/movie/now-playing'>Now Playing</Link>
                </li>
                <li>
                  <Link to='/movie/upcoming'>Upcoming</Link>
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
