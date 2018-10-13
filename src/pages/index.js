var React = require("react");
import { Link } from "gatsby";
var Header = require("../components/Header");

export default () => (
  <div style={{ color: `purple` }}>
    <Header />
    <Link to="/about">About</Link>
    <h1>Hello Gatsby!!!</h1>
    <p>What a world.</p>
  </div>
);
