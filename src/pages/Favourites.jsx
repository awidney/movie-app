import { useState, useEffect } from 'react';
import axios from 'axios';
import CardCategory from '../components/CardCategory';
import { API_KEY } from '../global/globals';

function Favourites() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [favouritesChanged, setFavouritesChanged] = useState(false);
  const favourites = JSON.parse(localStorage.getItem('favourites')) || [];

  useEffect(() => {
    document.title = 'Favourites — N/A Films';
    return () => {
      document.title = 'N/A Films';
    };
  }, []);

  useEffect(() => {
    if (favourites.length === 0) {
      setMovies([]);
      return;
    }

    setIsLoading(true);
    setIsError(false);

    const fetchFavourites = async () => {
      try {
        const requests = favourites.map((id) =>
          axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
            params: {
              api_key: API_KEY,
            },
          })
        );
        const responses = await Promise.all(requests);
        setMovies(responses.map((response) => response.data));
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFavourites();
  }, [favourites.length, favouritesChanged]);

  if (favourites.length === 0) {
    return <h2 className='my-10 text-center'>No favourite movies yet.</h2>;
  }

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
            releaseDate={movie.release_date.slice(0, 4)}
            rating={movie.vote_average.toFixed(1) * 10}
            id={movie.id}
            onToggleFavourite={() => setFavouritesChanged(!favouritesChanged)}
          />
        ))}
      </div>
    </section>
  );
}

export default Favourites;
