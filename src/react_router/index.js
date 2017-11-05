import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { CSSTransitionGroup } from 'react-transition-group';
import Index from '../containers/index/index';
// import data from '../data/portfolio.json';
// import slugify from '../utils/slugify';
// console.log('?? ', CS STransitionGroup)
class Routes extends Component {
  render() {
    return (
      <Router>
        <Route
          render={({ location }) => (
            <div>
              {/* no different than other usage of
                  TransitionGroup, just make
                  sure to pass `location` to `Route`
                  so it can match the old location
                  as it animates out
              */}

              <CSSTransitionGroup
                transitionName="fade"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}
              >
                <Switch key={location.pathname} location={location}>
                  <Route
                    // location={location}
                    // key={location.key}
                    path="/"
                    component={Index}
                    exact={true}
                  />

                  <Route
                    // location={location}
                    // key={location.key}
                    path="/:project"
                    component={Index}
                  />
                </Switch>
              </CSSTransitionGroup>
            </div>
          )}
        />
      </Router>
    );
  }
}

export default Routes;
