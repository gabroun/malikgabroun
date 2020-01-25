import styled from 'styled-components';

export const SearchContainer = styled.div`
  position: relative;
  display: inline-grid;
  grid-gap: 1em;
  left: calc(100% - 15px);
  transform: translateX(-100%);
  input {
    transition: 0.3s;
  }
  header {
    border-bottom: 2px solid #3d3d3d;
    display: flex;
    justify-content: space-between;
  }
`;

export const HitsContainer = styled.div`
  display: ${props => (props.show ? `grid` : `none`)};
  max-height: 80vh;
  overflow: scroll;
  z-index: 2;
  position: absolute;
  right: 0;
  top: calc(100% + 0.5em);
  width: 80vw;
  max-width: 30em;
  box-shadow: 0 0 5px 0 ${props => props.theme.black};
  padding: 0.7em 1em 0.4em;
  border-radius: 0.2em;
  background-color: ${props => props.theme.white};
  > div {
    padding-top: 0.6em;
  }
  div + div {
    margin-top: 0.6em;
    border-top: 1px solid;
  }
  mark {
    background-color: ${props => props.theme.orange};
  }
`;
