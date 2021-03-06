/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react';
import { useLocation, useParams, useHistory } from 'react-router-dom';
import queryString from 'query-string';
import { baseURL, apiKey } from '../config/movieAPI';
import { genres } from '../data/genres';

const validateGenre = (id) => {
  const inGenres = genres.filter((i) => i.name.toLowerCase() === id);
  return inGenres.length;
};

const createURL = (type, page, params, search, filter) => {
  const query = {
    page: '',
    sort_by: filter,
    api_key: apiKey,
    adult: false,
  };

  let url;
  let pageTitle;
  query.page = page || 1;

  // validate page type
  const parsePage = parseInt(query.page, 10);
  if(isNaN(parsePage)) {
    return {};
  }

  if(type === 'discover') {
    let { discoverID } = params;
    discoverID = discoverID === 'top-rated' ? 'top_rated' : discoverID;

    url = `${baseURL}movie/${discoverID}?${queryString.stringify(query)}`;

    pageTitle = discoverID;
  }

  if(type === 'genre') {
    const { genreID } = params;
    if(validateGenre(genreID)) {
      const genre = genres.filter((i) => i.name.toLowerCase() === genreID)[0].id;
      query.with_genres = genre;
      url = `${baseURL}discover/movie?${queryString.stringify(query)}`;

      pageTitle = genreID;
    }
  }

  if(type === 'search') {
    if(search) {
      query.query = search;
      url = `${baseURL}search/movie?${queryString.stringify(query)}`;

      pageTitle = search;
    }
  }

  return { url, pageTitle, page: query.page };
};

const defaultFilter = 'popularity.desc';

const useMovies = (type) => {
  const [filter, changeFilter] = useState(defaultFilter);

  // need location to get query and page
  const location = useLocation();
  const params = useParams();
  const { search } = location;

  const [movies, setMovies] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const parsed = queryString.parse(search);
  const { page, query } = parsed;
  const { url, pageTitle, page: currentPage } = createURL(type, page, params, query, filter);

  useEffect(() => {
    const getMovies = async (abortController) => {
      try {
        // call movie api here
        const res = await fetch(url, { signal: abortController.signal });
        const json = await res.json();
        if(res.ok) {
          setMovies(json);
          setError(false);
        }else{
          setError(true);
        }
        setLoading(false);
      } catch (error) {
        if(!abortController.signal.aborted) {
          setError(error);
          console.log(error);
        }
      }
    };

    const abortController = new AbortController();

    if(url) {
      setLoading(true);
      getMovies(abortController);
    }else{
      setError(true);
      setLoading(false);
    }

    return () => {
      abortController.abort();
    };
  }, [location, filter]);

  return {
    movies, error, loading, filter, changeFilter, pageTitle, currentPage,
  };
};

export default useMovies;
