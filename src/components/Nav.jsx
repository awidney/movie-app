import React, { useState, useEffect, useRef } from 'react';

function Nav() {
  const [searchActive, setSearchActive] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchActive(false);
      }
    };

    if (searchActive) {
      window.addEventListener('click', handleClickOutside);
    }

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [searchActive]);

  const toggleSearch = (event) => {
    event.stopPropagation();
    setSearchActive(!searchActive);
  };

  return (
    <nav className='w-100 mb-4 px-1.5 pt-2 xl:pt-4'>
      <div
        className={`flex items-center justify-between pr-1.5 xl:justify-around ${
          searchActive ? 'hidden' : ''
        }`}
      >
        <a href='/'>
          <img
            className='h-16 w-16 xl:h-20 xl:w-20'
            src='./public/nafilms4.svg'
            alt='NA Films Logo'
          />
        </a>

        <form
          className='-webkit-backdrop-blur-lg my-3 hidden h-10 items-center gap-2 rounded-lg border border-white border-opacity-10 bg-opacity-20 pr-1.5 shadow-md backdrop-blur-lg md:inline-flex md:w-[55%] xl:w-[560px] xl:py-6'
          ref={searchRef}
        >
          <button type='submit' className='pl-4'>
            {' '}
            <img
              className='h-6 w-6'
              src='./public/search2.svg'
              alt='Search button'
            />
          </button>

          <input
            type='text'
            placeholder='Search for movies...'
            className=' ml-3 flex-grow bg-transparent font-Poppins text-white focus:outline-none'
          />
        </form>

        <div className='flex gap-2'>
          <a href='/'>
            <img
              className='hover:fill h-10 w-10 xl:h-12 xl:w-12'
              src='./public/bookmark-add.svg'
              alt='Bookmarks Link'
            />
          </a>

          <button onClick={toggleSearch} className='md:hidden'>
            <img
              className='h-10 w-10'
              src='./public/search2.svg'
              alt='Search button'
            />
          </button>
        </div>
      </div>

      {searchActive && (
        <form
          className=' my-3 flex h-10 items-center gap-2 pr-1.5'
          ref={searchRef}
        >
          <input
            type='text'
            placeholder='Search for movies...'
            className=' ml-3 flex-grow bg-transparent font-Poppins text-white focus:outline-none'
          />
          <button type='submit'>
            {' '}
            <img
              className='h-10 w-10'
              src='./public/search2.svg'
              alt='Search button'
            />
          </button>
        </form>
      )}
    </nav>
  );
}

export default Nav;
