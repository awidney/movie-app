import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import NAFilmsLogo from './NAFilmsLogo';
import BurgerMenu from './Burger.jsx';
import MobileSearch from './MobileSearch';
import { useNavigate } from 'react-router-dom';
import '../styles/index.css';

function Nav() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navigate = useNavigate();

  const goToSearch = (e) => {
    e.preventDefault(); // prevent page refresh
    const searchQuery = e.target.searchQuery.value;
    if (!searchQuery) return; // if searchQuery is empty, do nothing
    navigate(`search?language=en-CA&query=${searchQuery}`);
    e.target.reset(); // clear the input field after submission
  };

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
    <header className='relative mb-8 mt-4 px-4 lg:mx-auto lg:mb-16 lg:w-[64rem] xl:w-[67.5rem] 2xl:w-[87rem]'>
      <div className='relative flex items-center justify-between overflow-hidden md:gap-4 lg:justify-start'>
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
          <NAFilmsLogo className='w-9 md:w-11' />
        </Link>

        <form //tablet form
          className='hidden items-center justify-between gap-4 pt-2 lg:flex'
          onSubmit={goToSearch}
        >
          <input
            name='searchQuery'
            placeholder='Search for movies...'
            className='width-transition w-[300px] flex-grow rounded-md border-2 border-white border-opacity-30 bg-transparent px-3 py-1.5 text-base focus:outline-none focus:ring-0 lg:focus:w-[350px] xl:focus:w-[450px]'
            type='text'
          />
        </form>

        <div className='flex items-center gap-2' ref={ref}>
          <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              className='w-6 pt-2 lg:hidden'
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

        <nav className='hidden pt-2 lg:flex'>
          <ul className='hidden items-center gap-6 text-base lg:flex'>
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

        <Link
          to='/favourites'
          className='absolute right-0 top-[27%] hidden lg:block'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            className='w-8 hover:fill-black'
          >
            <path
              fill='#dcb7ce'
              d='m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z'
            />
          </svg>
        </Link>
      </div>

      {isBurgerMenuOpen && (
        <nav className='absolute left-0 right-0 z-10 w-full rounded-lg bg-background px-4 py-8 lg:hidden'>
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
          <Link to='/movie/upcoming' className='mb-4 block'>
            Upcoming
          </Link>
          <Link to='/favourites' className='mb-2 block border-t-2 pt-4 text-sm'>
            Favourites
          </Link>
          <Link to='/about' className='mb-2 block text-sm'>
            About
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Nav;
