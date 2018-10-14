import React from 'react';
import { Link } from 'gatsby';
import { slide as Menu } from 'react-burger-menu';

require('./index.css');
// class Navigation extends React.Component {
//   render() {
//     return (
//       <div className="nav-container">
//         <nav className="nav-wrapper">
//           <div className="logo">Malik Elgabroun</div>
//           <ul className="nav">
//             <li className="active">
//               <Link to="/">Home</Link>
//             </li>
//             <li className="active">
//               <Link to="/about">About</Link>
//             </li>
//             <li className="">
//               <Link to="/resume">Resume</Link>
//             </li>
//             <li className="">
//               <Link to="/blog">Blog</Link>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     );
//   }
// }

// export default Navigation;

class Navigation extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Menu>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
        <a onClick={this.showSettings} className="menu-item--small" href="">
          Settings
        </a>
      </Menu>
    );
  }
}

export default Navigation;
