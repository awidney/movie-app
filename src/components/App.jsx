import { Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import PageHome from '../pages/PageHome.jsx';
import PageTrending from '../pages/PageTrending';

function App() {
  return (
    <div>
      <Nav />
      <main className='mx-auto my-8 px-4 lg:w-[1024px] xl:w-[67.5rem] 2xl:w-[87rem]'>
        <Routes>
          <Route path='/' exact element={<PageHome />} />
          <Route path='/movie/trending' element={<PageTrending />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
