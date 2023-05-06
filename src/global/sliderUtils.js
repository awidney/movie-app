import { useState, useEffect, useRef } from 'react';

export function useSlider() {
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  return { sliderRef, next, previous };
}

export function useSliderSettings() {
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
      maxCards = 7;
      maxScroll = 7;
      break;
    case viewportWidth >= 1024:
      maxCards = 5;
      maxScroll = 5;
      break;
    case viewportWidth >= 768:
      maxCards = viewportWidth / 200;
      maxScroll = Math.floor(viewportWidth / 198);
      break;
    case viewportWidth >= 640:
      maxCards = viewportWidth / 135;
      maxScroll = Math.floor(viewportWidth / 134);
      break;
    default:
      maxCards = viewportWidth / 145;
      maxScroll = Math.floor(viewportWidth / 140);
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

  return settings;
}
