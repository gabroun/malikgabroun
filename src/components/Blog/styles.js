import styled from 'styled-components';

export const PostItem = styled.div`
  flex-basis: 33%;
  margin: 15px;
  top: 0px;
  background-color: ${props => props.theme.white};
  border-radius: 6px;
  transition: all 0.4s ease 0.1s;
  border: 1px solid ${props => props.theme.lightGrey};

  &:hover {
    background: ${props => props.theme.whiteSmoke};
    transform: translateY(-5%);
    transition: all 0.4s ease 0.1s;
  }

  a {
    text-decoration: none;
    color: black;
  }
  .imgs {
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    height: 175px;
    img {
      margin-bottom: 0;
      padding: 0 1px;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    flex-basis: 50%;
  }
`;

export const PostPreview = styled.div`
  padding: 10px;
  h2 {
    line-height: 1.2em;
    font-size: 20px;
    font-weight: 700;
    margin: 14px 0;

    a {
      color: ${props => props.theme.black};
      text-decoration: none;
    }
  }
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;
`;

export const Tag = styled.p`
  font-size: 14px;
  padding: 0 6px;
  margin-bottom: 0;

  &:nth-of-type(1) {
    padding-right: 0;
  }
`;

export const TimeToRead = styled.p`
  font-size: 12px;
  margin: 10px 5px 0px;
  font-weight: bold;
  float: right;
`;

export const PostDate = styled.p`
  display: inline-block;
  font-size: 12px;
  margin: 10px 0px 0px;
`;

export const BlogList = styled.div`
  justify-content: space-around;
  max-width: 1280px;
  margin: 0 auto;
  text-align: left;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: 1fr 1fr;
  }
`;
