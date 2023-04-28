import Nav from './Nav';
import Trending from './Trending';
import Popular from './Popular';
import TopRated from './TopRated';
import NowPlaying from './NowPlaying';
import Upcoming from './Upcoming';

function App() {
  return (
    <div>
      <Nav />
      <main className='mx-auto my-8 px-4 lg:w-[1024px] xl:w-[67.5rem] 2xl:w-[87rem]'>
        <Trending />
        <Popular />
        <TopRated />
        <NowPlaying />
        <Upcoming />
      </main>
    </div>
  );
}

export default App;
