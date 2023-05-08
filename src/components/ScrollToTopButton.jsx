import { useState, useEffect } from 'react';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          className='fixed bottom-4 right-4 rounded-full border-2 border-[white] border-opacity-20 bg-slate-800'
          onClick={scrollToTop}
        >
          <svg
            className='lg:h-[50px] lg:w-[50px]'
            xmlns='http://www.w3.org/2000/svg'
            width='36'
            height='36'
            viewBox='0 0 24 24'
          >
            <path
              fill='#ff4154'
              d='M7.4 18.4L6 17l6-6l6 6l-1.4 1.4l-4.6-4.575L7.4 18.4Zm0-6L6 11l6-6l6 6l-1.4 1.4L12 7.825L7.4 12.4Z'
            />
          </svg>
        </button>
      )}
    </>
  );
}

export default ScrollToTopButton;
