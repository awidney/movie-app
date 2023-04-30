import { useQuery } from 'react-query';
import axios from 'axios';
import CardCategory from '../components/CardCategory';

function Favourites() {
  // get favourites from local storage or return an empty array
  const favourites = JSON.parse(localStorage.getItem('favourites')) || [];

  if (favourites.length === 0) {
    return <p>No favourite movies yet.</p>;
  }

  const {
    data: movies,
    isLoading,
    isError,
  } = useQuery('favouriteMovies', async () => {
    const requests = favourites.map((id) =>
      axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
        params: {
          api_key: 'e1eb6a4fd746d268382a20cd605740a8',
        },
      })
    );
    // wait for all requests to resolve
    const responses = await Promise.all(requests);
    // return the data property of each response
    return responses.map((response) => response.data);
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching favourites</div>;
  }

  return (
    <section>
      <h2>Favourites</h2>
      <div className='grid grid-cols-2 gap-4 py-2 categoryGridSmall:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 2xl:gap-10'>
        {movies.map((movie) => (
          <CardCategory
            key={`favourite_${movie.id}`}
            title={movie.title}
            poster={movie.poster_path}
            releaseDate={movie.release_date.slice(0, 4)} // show the year only
            rating={movie.vote_average.toFixed(1) * 10}
            id={movie.id}
          />
        ))}
      </div>
    </section>
  );
}

export default Favourites;
