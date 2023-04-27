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
    <nav className='mb-4 w-full px-1.5 pt-2 xl:pt-4'>
      <div
        className={`mx-auto flex items-center justify-between pr-1.5 xl:w-[67rem] 2xl:w-[87rem] ${
          searchActive ? 'hidden' : ''
        }`}
      >
        <a href='/'>
          <img
            className='w-14 xl:h-20 xl:w-20'
            src='./public/nafilms4.svg'
            alt='NA Films Logo'
          />
        </a>

        <form
          className='hidden h-10 items-center gap-2 pr-1.5 md:inline-flex md:w-[75%] xl:w-[560px] xl:py-6'
          ref={searchRef}
        >
          <button type='submit' className='ml-4'>
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
            className='ml-3 flex-grow bg-transparent font-Poppins text-white focus:outline-none'
          />
        </form>

        <div className='flex gap-2'>
          <a href='/'>
            <img
              className='hover:fill w-8 xl:h-12 xl:w-12'
              src='./public/bookmark-add.svg'
              alt='Bookmarks Link'
            />
          </a>

          <button onClick={toggleSearch} className='md:hidden'>
            <img
              className='w-8'
              src='./public/search2.svg'
              alt='Search button'
            />
          </button>
        </div>
      </div>

      {searchActive && (
        <form
          className='mb-[40px] mt-[8px] flex h-10 items-center gap-2 pr-1.5'
          ref={searchRef}
        >
          <input
            type='text'
            placeholder='Search for movies...'
            className='ml-3 w-full flex-grow bg-transparent font-Poppins text-white focus:outline-none'
          />
          <button type='submit'>
            {' '}
            <img
              className='min-w-[32px]'
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
