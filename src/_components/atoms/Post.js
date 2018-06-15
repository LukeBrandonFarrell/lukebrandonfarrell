import styled from 'styled-components'

const Post = styled.div`
  display: inline-block;
  box-sizing: content-box;
  padding: 1%;
  width: 45%;

  @media (max-width: 750px) {
    width: 100%;
  }
`;

export { Post };
