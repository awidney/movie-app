import Nav from './Nav';
import Trending from './Trending';
import Popular from './Popular';

function App() {
  return (
    <div>
      <Nav />
      <main className='px-4'>
        <Trending />
        <Popular />
      </main>
    </div>
  );
}

export default App;
