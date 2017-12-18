import React from 'react';
// import portofolio from '../'
const Layout = ({ children }) => (
  <div className="App">
    <section>
      <div className="App-header">
        <h1>Tyler Adams</h1>
        <p>
          I am a passionate full-stack developer. I thrive working on creative
          teams. My primary goal is to write easy-to-understand, well-tested
          code for my teammates (and my future self). I work well with other
          teams too, and can explain the trade-offs of technical decisions in
          non-technical terms.
        </p>
      </div>
      {children}
    </section>
  </div>
);

export default Layout;
