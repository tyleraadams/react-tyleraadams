import React from 'react';

const Layout = ({ children }) => (
  <div className="App">
    <section>
      <div className="App-header">
        <p>My name is</p>
        <h1>Tyler Adams</h1>
        <p>and I make stuff on the interwebs</p>
        <p>See more of my work</p>
      </div>
      <hr />
      {children}
    </section>
  </div>
);

export default Layout;
