import Nav from './Nav';
import Trending from './Trending';

function App() {
  return (
    <div>
      <Nav />
      <main className='px-4'>
        <Trending />
      </main>
    </div>
  );
}

export default App;
