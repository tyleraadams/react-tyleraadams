import React from 'react';
import './layout.css';
import Github from '../../components/buttons/github';

const Layout = ({ children }) => (
  <div className="layout">
    <section>
      <div className="layout__header">
        <nav>
          <h1>Tyler Adams</h1>
          <Github
            title="Tyler Adams on Github"
            href="https://www.github.com/tyleraadams"
            className="layout__github"
          />
        </nav>
        <div className="layout__desc">
          <p>
            I am a passionate builder of beautiful web experiences and a
            full-stack developer. Here is what's important to me in my work:
          </p>
          <ul>
            <li>
              <em>Maintainability</em>. My primary goal is to write
              easy-to-understand, well-tested code for my teammates (and my
              future self).
            </li>
            <li>
              <em>Communication</em>. I thrive working on creative teams. I deal
              with roadblocks by communicating with the rest of the team and
              project stakeholders. I excel at proposing alternate solutions
              that may be technical, design, or product-related. I speak human,
              not a programming language. (Even though I am pretty good at
              writing in them.)
            </li>
            <li>
              <em>Kindness</em>. Everyone deserves respect. Treating people well
              makes for an open and fun work culture, and results in more trust
              and better code and products.
            </li>
          </ul>
        </div>
      </div>
      {children}
    </section>
  </div>
);

export default Layout;
