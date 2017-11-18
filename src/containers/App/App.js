import React from 'react';
import { Route, Switch } from 'react-router';
import { TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';

import Layout from '../../components/layout/layout';
import Transition from '../../components/transition/transition';

import './app.css';
const App = props => {
  const locationKey = props.location ? props.location.pathname : '';
  return (
    <Layout>
      <TransitionGroup>
        <Transition key={locationKey}>
          <section style={{ position: 'fixed' }}>
            <Switch location={props.location}>
              {props.routes.map((route, index) => (
                <Route {...route} key={index} />
              ))}
            </Switch>
          </section>
        </Transition>
      </TransitionGroup>
    </Layout>
  );
};

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string
  }).isRequired,
  routes: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};
export default App;
