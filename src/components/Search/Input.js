import React from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';

const SearchBox = ({ refine, setFocus }) => {
  return (
    <input
      type="text"
      placeholder="Seacrh"
      aria-label="search"
      onChange={e => refine(e.target.value)}
      onMouseLeave={e => e.target.blur()}
      onFocus={() => setFocus(true)}
    />
  );
};

export default connectSearchBox(SearchBox);
