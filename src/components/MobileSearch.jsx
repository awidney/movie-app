// MobileSearch.js
import { useNavigate } from 'react-router-dom';

function MobileSearch({ onSearch }) {
  const navigate = useNavigate();

  const goToSearch = (e) => {
    e.preventDefault(); // prevent page refresh
    const searchQuery = e.target.searchQuery.value;
    if (!searchQuery) return; // if searchQuery is empty, do nothing
    navigate(`nafilms/search?language=en-CA&query=${searchQuery}`);
    e.target.reset(); // clear the input field after submission
    onSearch && onSearch(); // invoke the onSearch callback
  };

  return (
    <div className='absolute left-0 z-20 h-[60px] w-full bg-background px-4 pt-2 lg:hidden'>
      <form
        className='flex items-center justify-between gap-4'
        onSubmit={goToSearch}
      >
        <input
          name='searchQuery' // Add name attribute here
          placeholder='Search for movies...'
          className='flex-grow bg-transparent py-4 focus:outline-none'
          type='text'
        />
        <button type='submit'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            className='w-6 py-4'
          >
            <path
              fill='#dcb7ce'
              d='m18.9 20.3l-5.6-5.6q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.625 5.625q.275.275.275.675t-.3.7q-.275.275-.7.275t-.7-.275ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z'
            />
          </svg>
        </button>
      </form>
    </div>
  );
}

export default MobileSearch;
