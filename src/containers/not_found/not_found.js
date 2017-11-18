import React from 'react';
import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <div>
      <h2>404 Not Found</h2> <Link to="/">Back To All Projects</Link>
    </div>
  );
};

export default NotFound;
