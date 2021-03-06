import React, { Suspense, lazy } from 'react';
import {
  Route, Redirect, Switch,
} from 'react-router-dom';
import Fallback from './shared/Fallback';

const Home = lazy(() => import('./pages/Home'));
const Person = lazy(() => import('./pages/Person'));
const Favorites = lazy(() => import('./pages/Favorites'));
const Movie = lazy(() => import('./pages/Movie'));
const NotFound = lazy(() => import('./pages/NotFound'));
const WatchList = lazy(() => import('./pages/WatchList'));
const MoviesInGenre = lazy(() => import('./pages/MoviesInGenre'));
const SearchResults = lazy(() => import('./pages/SearchResults'));
const Cast = lazy(() => import('./pages/Cast'));

// readable routes linter
/* eslint react/jsx-max-props-per-line: 0 */

const Routes = () => {
  return (
    <Suspense fallback={<Fallback />}>
      <Switch>
        <Redirect exact path="/" to="/discover/popular" />
        <Redirect exact path="/discover" to="/discover/popular" />
        <Route exact path={['/discover/:discoverID(popular|top-rated|upcoming)']} component={Home} />

        <Route exact path="/genre/:genreID" component={MoviesInGenre} />
        <Route exact path="/movie/:movieID" component={Movie} />
        <Route exact path="/movie/:movieID/cast" component={Cast} />
        <Route exact path="/person/:personID" component={Person} />

        <Route exact path="/search" component={SearchResults} />

        <Route exact path="/favorites" component={Favorites} />
        <Route exact path="/watch-list" component={WatchList} />
        {/* 404 PAGE */}
        <Route path="*" component={NotFound} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
