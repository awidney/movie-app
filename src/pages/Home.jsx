import React, { useEffect } from 'react';
import Trending from '../components/Trending';
import Popular from '../components/Popular';
import TopRated from '../components/TopRated';
import NowPlaying from '../components/NowPlaying';
import Upcoming from '../components/Upcoming';

function PageHome() {
  useEffect(() => {
    document.title = 'NA Films';
    return () => {
      document.title = 'NA Films';
    };
  }, []);
  return (
    <>
      <Trending />
      <Popular />
      <TopRated />
      <NowPlaying />
      <Upcoming />
    </>
  );
}

export default PageHome;
