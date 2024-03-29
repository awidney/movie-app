import { useQuery } from 'react-query';
import axios from 'axios';
import CardNormal from '../components/CardNormal';
import { Link } from 'react-router-dom';
import { API_KEY } from '../global/globals';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useSlider, useSliderSettings } from '../global/sliderUtils';
import { SliderLeftButton } from './SliderLeftButton';
import { SliderRightButton } from './SliderRightButton';

function Upcoming() {
  const { data: upcomingMovies } = useQuery({
    queryKey: 'upcomingMovies',
    queryFn: async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&region=US|CA`
      );
      return response.data;
    },
  });

  const { sliderRef, next, previous } = useSlider();
  const settings = useSliderSettings();

  return (
    <section className='mt-6'>
      <div className='flex items-baseline justify-between'>
        <h2>Upcoming</h2>
        <Link
          to='/movie/upcoming'
          className='text-xs text-pink-200 md:text-base xl:text-lg'
        >
          View More
        </Link>
      </div>
      <div className='relative w-full'>
        <Slider {...settings} ref={sliderRef} className='slider py-2'>
          {upcomingMovies?.results.map((movie) => (
            <CardNormal
              key={movie.id}
              title={movie.title}
              poster={movie.backdrop_path}
              releaseDate={movie.release_date.slice(0, 4)} // show the year only
              rating={movie.vote_average.toFixed(1) * 10}
              id={movie.id}
            />
          ))}
        </Slider>
        <SliderLeftButton previous={previous} />
        <SliderRightButton next={next} />
      </div>
    </section>
  );
}

export default Upcoming;
