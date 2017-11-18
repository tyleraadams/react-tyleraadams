import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from '../containers/app/app';
import routes from './routes';

const Router = () => {
  return (
    <BrowserRouter>
      <Route
        render={({ location }) => <App location={location} routes={routes} />}
      />
    </BrowserRouter>
  );
};

export default Router;
