import Nav from './Nav';
import Trending from './Trending';
import Popular from './Popular';
import TopRated from './TopRated';

function App() {
  return (
    <div>
      <Nav />
      <main className='mx-auto my-8 px-4 xl:w-[67.5rem] 2xl:w-[87rem]'>
        <Trending />
        <Popular />
        <TopRated />
      </main>
    </div>
  );
}

export default App;
