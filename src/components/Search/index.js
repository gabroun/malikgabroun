import algoliasearch from 'algoliasearch/lite';
import React, { useState, createRef, useMemo } from 'react';

import {
  InstantSearch,
  Index,
  connectStateResults,
} from 'react-instantsearch-dom';
import Input from './Input';
import Hits from './Hits';

import useOnClickOutside from '../../hooks/useOnClickOutside';

import { SearchContainer, HitsContainer } from './Styles';

const Results = connectStateResults(
  ({ searching, searchState: state, searchResults: res }) => {
    return (
      (searching && <div>Searching...</div>) ||
      (res && res.nbHits === 0 && <div>No results for {state.query}</div>)
    );
  }
);

const Stats = connectStateResults(
  ({ searchResults: res }) =>
    res && res.nbHits > 0 && `${res.nbHits} result${res.nbHits > 1 ? `s` : ``}`
);

const Search = () => {
  const [focus, setFocus] = useState(false);
  const [query, setQuery] = useState(``);
  const node = createRef();
  const appId = process.env.GATSBY_ALGOLIA_APP_ID;
  const searchKey = process.env.GATSBY_ALGOLIA_SEARCH_KEY;

  const searchClient = useMemo(() => algoliasearch(appId, searchKey), [
    appId,
    searchKey,
  ]);

  useOnClickOutside(node, () => {
    setFocus(false);
  });

  return (
    <SearchContainer ref={node}>
      <InstantSearch
        searchClient={searchClient}
        indexName="malikgabroun.com's blog"
        onSearchStateChange={({ query }) => setQuery(query)}
      >
        <Input
          setFocus={() => {
            setFocus(true);
          }}
          {...focus}
        />

        <HitsContainer className="wrapper" show={query.length > 0 && focus}>
          <Index
            key="malikgabroun.com's blog"
            indexName="malikgabroun.com's blog"
          >
            <header>
              <h3>Blog Posts</h3>
              <Stats />
            </header>
            <Results />
            <Hits onClick={() => setFocus(false)} />
          </Index>
        </HitsContainer>
      </InstantSearch>
    </SearchContainer>
  );
};

export default Search;
