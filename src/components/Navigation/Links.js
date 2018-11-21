import React from 'react';
import { Link } from 'gatsby';

function Links() {
  return (
    <div className="nav-container">
      <nav className="nav-wrapper">
        <ul className="nav">
          <li className="active">
            <Link to="/">Home</Link>
          </li>
          <li className="active">
            <Link to="/about">About</Link>
          </li>

          <li className="">
            <Link to="/resume">Resume</Link>
          </li>
          <li className="">
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Links;
