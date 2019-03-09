import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const MenuItems = styled.ul`
  list-style: none;
  padding: 25px 25px 0 10px;
  margin: 0;
  li {
    margin: 0 5px;
    padding-left: 20px;
  }
  a {
    text-decoration: none;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.8);
    padding: 1rem 1.3rem;
    display: flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 1em;
    background: none;
    border: 0;
    cursor: pointer;
  }
  @media (min-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
    a {
      &:after {
        height: 3px;
        background: #f47c48;
        content: '';
        width: 0;
        position: absolute;
        transform: translateX(-50%);
        transition: width 0.4s;
        transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
        left: 50%;
        margin-top: 2rem;
      }
      &:hover,
      &:focus {
        outline: none;
        &:after {
          width: calc(100% - 60px);
        }
      }
    }
  }
`;

function Links() {
  return (
    <div className='nav-menu'>
      <MenuItems>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/resume">Resume</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </MenuItems>
    </div>
  );
}

export default Links;
