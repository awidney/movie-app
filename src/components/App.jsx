import { Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import Home from '../pages/Home.jsx';
import Trending from '../pages/Trending';
import MovieInfo from '../pages/MovieInfo';
import ScrollToTop from './ScrollToTop';
import SearchResults from '../pages/SearchResults';
import Popular from '../pages/Popular';
import TopRated from '../pages/TopRated';
import NowPlaying from '../pages/NowPlaying';
import Upcoming from '../pages/Upcoming';
import About from '../pages/About';
import Favourites from '../pages/Favourites';
import ScrollToTopButton from './ScrollToTopButton';

function App() {
  return (
    <div className='flex h-screen flex-col'>
      <Nav />
      <ScrollToTop />
      <main className='flex-1 px-4 lg:mx-auto lg:w-[1024px] xl:w-[67.5rem] 2xl:w-[87rem]'>
        <Routes>
          <Route path='/nafilms' element={<Home />} />
          <Route path='/nafilms/movie/trending' element={<Trending />} />
          <Route path='/nafilms/movie/popular' element={<Popular />} />
          <Route path='/nafilms/movie/top-rated' element={<TopRated />} />
          <Route path='/nafilms/movie/now-playing' element={<NowPlaying />} />
          <Route path='/nafilms/movie/upcoming' element={<Upcoming />} />
          <Route path='/nafilms/movie/:id/:title' element={<MovieInfo />} />
          <Route path='/nafilms/search' element={<SearchResults />} />
          <Route path='/nafilms/about' element={<About />} />
          <Route path='/nafilms/favourites' element={<Favourites />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
