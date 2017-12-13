import React from 'react';
import { CSSTransition } from 'react-transition-group';

const Transition = props => (
  <CSSTransition
    {...props}
    classNames="Transition"
    timeout={50}
    mountOnEnter={true}
    unmountOnExit={true}
  />
);

export default Transition;
