import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Index from '../containers/Index/Index';
import data from '../data/portfolio.json';
import slugify from '../utils/slugify';

function Router() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Index} />
        {data.entries.map(datum => (
          <Route
            key={slugify(datum.hed)}
            path={`/${slugify(datum.hed)}`}
            component={Index}
          />
        ))}
      </div>
    </BrowserRouter>
  );
}

export default Router;
