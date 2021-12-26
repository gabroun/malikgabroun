import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const MenuItems = styled.ul`
  list-style: none;
  margin: 0;
  li {
    margin: 0 5px;
  }
  a {
    text-decoration: none;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.8);
    padding: 1rem;
    display: flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 1em;
    background: none;
    border: 0;
    cursor: pointer;
    &.active {
      color: #f47c48;
    }
  }
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    a {
      &:after {
        height: 3px;
        background: #f47c48;
        content: "";
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

const isPartiallyActive = ({ isPartiallyCurrent }) => {
  return isPartiallyCurrent ? { className: "active" } : {};
};

const Links = () => {
  return (
    <nav className="nav-menu">
      <MenuItems>
        <li>
          <Link to="/" activeClassName="active">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about/" activeClassName="active">
            About
          </Link>
        </li>
        <li>
          <Link
            to="/blog/"
            activeClassName="active"
            getProps={isPartiallyActive}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link to="/courses/" activeClassName="active">
            Courses
          </Link>
        </li>
        <li>
          <Link
            to="/book-notes/"
            activeClassName="active"
            getProps={isPartiallyActive}
          >
            Book Notes
          </Link>
        </li>
        <li>
          <Link to="/uses/" activeClassName="active">
            Uses
          </Link>
        </li>
      </MenuItems>
    </nav>
  );
};

export default Links;
