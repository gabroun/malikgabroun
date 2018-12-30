import styled from 'styled-components';

const BlogList = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 1280px;
  margin: 0 auto;
  text-align: left;

  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export default BlogList;
