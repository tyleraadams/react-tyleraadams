import React from 'react';
import portfolio from '../../data/portfolio';
import deslugifyPath from '../../utils/deslugify';
import NotFound from '../not_found/not_found';
function Project(props) {
  const { match } = props;
  const { params } = match;
  const { slug } = params;
  const entry = portfolio.entries.find(
    project => project.hed === deslugifyPath(slug)
  );

  return entry ? (
    <article className="card">
      <figure style={{ maxWidth: '100%' }}>
        <img
          src={`https://res.cloudinary.com/tyleraadams/image/upload/${entry.image}`}
          style={{ maxWidth: '100%' }}
        />
      </figure>
      <h3>{entry.hed}</h3>

      <small>{entry.dek}</small>
      <div>
        <a key={entry.href} href={entry.href} title={entry.hed}>
          Link To Project
        </a>
        <a key={entry.git} href={entry.git} title={entry.hed}>
          Git
        </a>
      </div>

      <date>{entry.date}</date>
      <main>
        <p>{entry.body}</p>
      </main>
      <ul>
        {entry.tags.split(',').map(function(tag) {
          return <li>{tag}</li>;
        })}
      </ul>
    </article>
  ) : (
    <NotFound />
  );
}
export default Project;
