// import React from 'react';
// import { graphql, Link } from 'gatsby';
// // import Layout from '../components/Layout/index';
// import Layout from './Layout/index';
// import '../styles/portfolio.css';

// class Portfolio extends React.Component {
//   render() {
//     console.log(this.props.data);
//     const { data } = this.props;
//     const { edges } = data.allMarkdownRemark;
//     return (
//       <Layout>
//         <div style={{ display: 'flex' }}>
//           <div className="portfolio__list">
//             <ul
//               style={{
//                 display: 'grid',
//                 listStyle: 'none',
//                 gridTemplateColumns: '1fr 1fr',
//                 justifyContent: 'center',
//               }}
//             >
//               {edges.map(edge => {
//                 const { title, path, date, image } = edge.node.frontmatter;

//                 const imgUrl = require(`../resources/${image}`);
//                 return (
//                   <li
//                     className="portfolio__item"
//                     key={path}
//                     style={{
//                       margin: '5px',
//                       position: 'relative',
//                       border: 'solid 1px black',
//                       overflow: 'hidden',
//                     }}
//                   >
//                     <Link to={path}>
//                       <img src={imgUrl} style={{ transition: 'all 0.3s' }} />
//                       <p
//                         style={{
//                           position: 'absolute',
//                           top: '95%',
//                           left: '5%',
//                           color: 'black',
//                           textDecoration: 'underline',
//                           transform: 'translate(-5%, -95%)',
//                         }}
//                       >
//                         {title}
//                       </p>
//                     </Link>
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>
//         </div>
//       </Layout>
//     );
//   }
// }

// export const query = graphql`
//   query {
//     allMarkdownRemark(filter: { frontmatter: { type: { eq: "portfolio" } } }) {
//       edges {
//         node {
//           frontmatter {
//             title
//             path
//             date
//             image
//           }
//         }
//       }
//     }
//   }
// `;

// export default Portfolio;
