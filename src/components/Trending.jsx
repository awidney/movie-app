import { useQuery } from 'react-query';
import axios from 'axios';
import CardTrending from './CardTrending';
import { Link } from 'react-router-dom';
import { API_KEY } from '../global/globals';
import { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Trending() {
  const { data: trendingMovies } = useQuery({
    queryKey: 'trendingMovies',
    queryFn: async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
      );
      return response.data;
    },
  });

  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setViewportWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let maxCards;
  let maxScroll;

  switch (true) {
    case viewportWidth >= 1536:
      maxCards = 4;
      maxScroll = 4;
      break;
    case viewportWidth >= 1024:
      maxCards = 3;
      maxScroll = 3;
      break;
    case viewportWidth >= 768:
      maxCards = viewportWidth / 350;
      maxScroll = Math.floor(viewportWidth / 350);
      break;
    case viewportWidth >= 640:
      maxCards = viewportWidth / 200;
      maxScroll = Math.floor(viewportWidth / 200);
      break;
    default:
      maxCards = viewportWidth / 210;
      maxScroll = Math.floor(viewportWidth / 210);
      break;
  }

  const settings = {
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: maxCards,
    slidesToScroll: maxScroll,
    initialSlide: 0,
    draggable: false,
  };

  return (
    <section>
      <div className='flex items-baseline justify-between'>
        <h2>Trending</h2>
        <Link
          to='/movie/trending'
          className='text-xs text-pink-200 md:text-base'
        >
          View More
        </Link>
      </div>
      <div className='relative w-full'>
        <Slider {...settings} ref={sliderRef} className='slider my-2 h-[180px]'>
          {trendingMovies?.results.map((movie) => (
            <CardTrending
              key={movie.id}
              title={movie.title}
              poster={movie.backdrop_path}
              releaseDate={movie.release_date.slice(0, 4)} // show the year only
              rating={movie.vote_average.toFixed(1) * 10}
              id={movie.id}
            />
          ))}
        </Slider>
        <button
          className='absolute left-0 top-[93px] hidden h-[170px] -translate-y-1/2 transform bg-black bg-opacity-50 focus:outline-none lg:block'
          onClick={previous}
        >
          <svg
            className='h-full w-10 fill-transparent hover:fill-white'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
          >
            <path d='M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6l6 6l1.41-1.41z' />
          </svg>
        </button>
        <button
          className='absolute right-0 top-[93px] hidden h-[170px] -translate-y-1/2 transform bg-black bg-opacity-50 focus:outline-none lg:block'
          onClick={next}
        >
          <svg
            className='h-full w-10 rotate-180 fill-transparent hover:fill-white'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
          >
            <path d='M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6l6 6l1.41-1.41z' />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default Trending;
