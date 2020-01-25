import { Highlight, connectHits, Snippet } from 'react-instantsearch-dom';
import { Link } from 'gatsby';
import React from 'react';

const HitComp = ({ hits, onClick }) => {
  return hits.map(hit => (
    <div className="hits" key={hit.objectID}>
      <Link to={hit.path} onClick={onClick}>
        <h4>
          <Highlight attribute="title" hit={hit} tagName="mark" />
        </h4>
      </Link>
      <Snippet attribute="excerpt" hit={hit} tagName="mark" />
    </div>
  ));
};

export default connectHits(HitComp);
