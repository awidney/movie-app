import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import CardCategory from '../components/CardCategory';
import { API_KEY } from '../global/globals';

function SearchResults() {
  const [currentPage, setCurrentPage] = useState(1);
  const [allMovies, setAllMovies] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('query');

  useEffect(() => {
    if (query) {
      document.title = `${query} — N/A Films`;
    } else {
      document.title = 'N/A Films';
    }
    return () => {
      document.title = 'N/A Films';
    };
  }, []);

  useEffect(() => {
    setCurrentPage(1);
    setAllMovies([]);
  }, [query]);

  const { data: searchResults } = useQuery(
    ['searchResults', query, currentPage],
    async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-CA&query=${query}&page=${currentPage}`
      );
      return response.data;
    },
    { keepPreviousData: true }
  );

  useEffect(() => {
    if (searchResults?.results) {
      setAllMovies((prevMovies) => {
        // Check if the current query is the same as the previous one
        if (prevMovies.length > 0 && prevMovies[0].query === query) {
          // If so, append the new search results to the existing list
          return [...prevMovies, ...searchResults.results];
        } else {
          // Otherwise, reset the allMovies state to an empty array
          return [
            ...searchResults.results.map((movie) => ({ ...movie, query })),
          ];
        }
      });
    }
  }, [searchResults]);

  const handleViewMore = () => {
    if (searchResults?.total_pages && currentPage < searchResults.total_pages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const showViewMoreButton =
    allMovies.length < (searchResults?.total_results || 0);

  return (
    <section>
      <h2>Search Results</h2>
      <div className='grid grid-cols-2 gap-4 py-2 categoryGridSmall:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 2xl:gap-10'>
        {allMovies.map((movie) => (
          <CardCategory
            key={`search_${movie.id}`}
            title={movie.title}
            poster={movie.poster_path}
            releaseDate={movie.release_date.slice(0, 4)} // show the year only
            rating={movie.vote_average.toFixed(1) * 10}
            id={movie.id}
          />
        ))}
      </div>
      {showViewMoreButton && (
        <button
          className=' mt-4 w-full rounded bg-blue-500 px-4 py-2 text-white'
          onClick={handleViewMore}
        >
          View More
        </button>
      )}
    </section>
  );
}

export default SearchResults;
