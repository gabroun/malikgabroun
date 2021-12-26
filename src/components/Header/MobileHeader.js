import { Link } from "gatsby";
import Media from "react-media";
import React from "react";
import styled from "styled-components";

const MobileMenu = styled.div`
  position: fixed;
  z-index: 3;
  bottom: 0;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  left: 0rem;
  right: 0rem;
  display: none;
  background-color: #fefefe;
  box-shadow: 0 0 3px 0px rgba(54, 54, 54, 0.15);
  @media (max-width: 767px) {
    display: flex;
  }
  a {
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    flex-shrink: 1;
    font-size: 0.875rem;
    line-height: 1;
    -webkit-box-pack: center;
    justify-content: center;
    position: relative;
    text-align: center;
    width: 4rem;
    height: 4rem;
    border-radius: 2px;
    text-decoration: none;
    &.active {
      svg {
        fill: #f47c48 !important;
      }
    }
  }
`;

const isPartiallyActive = ({ isPartiallyCurrent }) => {
  return isPartiallyCurrent ? { className: "active" } : {};
};

const MobileHeader = () => (
  <Media
    query="(max-width: 767px)"
    render={() => {
      return (
        <MobileMenu>
          <Link to="/" activeClassName="active">
            <span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="50 0 512 512"
                height="1.5em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "rgb(51, 51, 51)" }}
              >
                <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z" />
              </svg>
            </span>
            <div>Home</div>
          </Link>
          <Link to="/about/" activeClassName="active">
            <span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="-50 0 512 512"
                height="1.5em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "rgb(51, 51, 51)" }}
              >
                <path d="M336 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM192 128c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H102.4C90 384 80 375.4 80 364.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6v19.2z" />
              </svg>
            </span>
            <div>About</div>
          </Link>
          <Link
            to="/blog/"
            activeClassName="active"
            getProps={isPartiallyActive}
          >
            <span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1.5em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "rgb(51, 51, 51)" }}
              >
                <path d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z" />
              </svg>
            </span>
            <div>Blog</div>
          </Link>
          <Link to="/courses/" activeClassName="active">
            <span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1.5em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "rgb(51, 51, 51)" }}
              >
                <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" />
              </svg>
            </span>
            <div>Courses</div>
          </Link>
          <Link
            to="/book-notes/"
            activeClassName="active"
            getProps={isPartiallyActive}
          >
            <span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                version="1.1"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14 2v13h-10.5c-0.829 0-1.5-0.672-1.5-1.5s0.671-1.5 1.5-1.5h9.5v-12h-10c-1.1 0-2 0.9-2 2v12c0 1.1 0.9 2 2 2h12v-14h-1z"></path>
                <path d="M3.501 13v0c-0 0-0.001 0-0.001 0-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c0 0 0.001-0 0.001-0v0h9.498v-1h-9.498z"></path>
              </svg>
            </span>
            <div>Book Notes</div>
          </Link>
          <Link to="/uses/" activeClassName="active">
            <span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1.5em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "rgb(51, 51, 51)" }}
              >
                <path d="M104.998 104.998v110.004h206.004V104.998H104.998zm288 112v46.004h30.004v-46.004h-30.004zm-194.512 16l-8.668 26.004h36.364l-8.668-26.004h-19.028zm-157.488 44v18.004h430.004v-18.004H40.998zm14.004 36V496h17.996V371.729l58.73-58.731h-25.453l-33.277 33.277v-33.277H55.002zm289.996 0v46.004h94.004v-46.004h-94.004zM394.271 320a10.272 8 0 0 1 10.272 8 10.272 8 0 0 1-10.272 8A10.272 8 0 0 1 384 328a10.272 8 0 0 1 10.271-8zm-49.273 56.998v46.004h94.004v-46.004h-94.004zM394.271 384a10.272 8 0 0 1 10.272 8 10.272 8 0 0 1-10.272 8A10.272 8 0 0 1 384 392a10.272 8 0 0 1 10.271-8zm-49.273 56.998v46.004h94.004v-46.004h-94.004zM394.271 448a10.272 8 0 0 1 10.272 8 10.272 8 0 0 1-10.272 8A10.272 8 0 0 1 384 456a10.272 8 0 0 1 10.271-8z"></path>
              </svg>
            </span>
            <div>Uses</div>
          </Link>
        </MobileMenu>
      );
    }}
  />
);

export default MobileHeader;
