import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SvgComponent from './SvgComponent';
import BurgerMenu from './Burger.jsx';
import MobileSearch from './MobileSearch';

function Nav() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleBurgerMenuClick = (isOpen) => {
    setIsBurgerMenuOpen(isOpen);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsBurgerMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref]);

  return (
    <header className='relative mx-auto my-4 px-4 lg:w-[64rem] xl:w-[67.5rem] 2xl:w-[87rem]'>
      <div className='flex items-center justify-between'>
        {isSearchOpen && (
          <>
            <MobileSearch onSearch={() => setIsSearchOpen(false)} />
            <div
              className='fixed inset-0 z-10 bg-opacity-0'
              onClick={closeSearch}
            ></div>
          </>
        )}

        <Link to='/'>
          <SvgComponent className='w-9' />
        </Link>

        <div className='flex items-center gap-2' ref={ref}>
          <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              className='w-6 pt-2'
            >
              <path
                fill='#dcb7ce'
                d='m18.9 20.3l-5.6-5.6q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.625 5.625q.275.275.275.675t-.3.7q-.275.275-.7.275t-.7-.275ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z'
              />
            </svg>
          </button>
          <BurgerMenu
            isOpen={isBurgerMenuOpen}
            onClick={handleBurgerMenuClick}
          />
        </div>
      </div>

      {isBurgerMenuOpen && (
        <div className='absolute left-0 right-0 z-10 w-full rounded-lg bg-background px-4 py-8 md:hidden'>
          <Link to='/movie/trending' className='mb-2 block'>
            Trending
          </Link>
          <Link to='/movie/popular' className='mb-2 block'>
            Popular
          </Link>
          <Link to='/movie/top-rated' className='mb-2 block'>
            Top Rated
          </Link>
          <Link to='/movie/now-playing' className='mb-2 block'>
            Now Playing
          </Link>
          <Link to='/movie/upcoming' className='mb-2 block'>
            Upcoming
          </Link>
          <Link to='/favourites' className='mb-2 block text-sm'>
            Favourites
          </Link>
          <Link to='/about' className='mb-2 block text-sm'>
            About
          </Link>
        </div>
      )}
    </header>
  );
}

export default Nav;
