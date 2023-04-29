import React from 'react';
import Trending from '../components/Trending';
import Popular from '../components/Popular';
import TopRated from '../components/TopRated';
import NowPlaying from '../components/NowPlaying';
import Upcoming from '../components/Upcoming';

function PageHome() {
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
