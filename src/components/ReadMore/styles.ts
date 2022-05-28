import styled from "styled-components";

export const List = styled.div`
  justify-content: flex-start;

  margin: 0 auto;
  text-align: left;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 400px));

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: 1fr 1fr;
  }

  .tags {
    display: none;
  }

  .postPreview {
    grid-template-rows: 1fr 1fr 1fr;
  }

  p {
    margin-bottom: 20px;
  }
`;
