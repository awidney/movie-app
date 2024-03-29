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
      <main className='flex-1 px-4 lg:mx-auto lg:w-[62.9375rem] xl:w-[67.5rem] 2xl:w-[87rem]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie/trending' element={<Trending />} />
          <Route path='/movie/popular' element={<Popular />} />
          <Route path='/movie/top-rated' element={<TopRated />} />
          <Route path='/movie/now-playing' element={<NowPlaying />} />
          <Route path='/movie/upcoming' element={<Upcoming />} />
          <Route path='/movie/:id/:title' element={<MovieInfo />} />
          <Route path='/search' element={<SearchResults />} />
          <Route path='/about' element={<About />} />
          <Route path='/favourites' element={<Favourites />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
