import styled from "styled-components";
import Link from 'gatsby-link'

const Main = styled(Link)`
  display: inline-block;
  width: 50%;
  padding: 15px;
  vertical-align: top;
  text-decoration: none;

  :hover {
    * { color: #9E170B; }
    h1 { text-decoration: underline; }
  }

  @media (max-width: 950px) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  margin-bottom: 5px;
`;

const Title = styled.h1`
  margin-bottom: 12px;
  font-size: 26px;
  font-weight: 600;
  color: #2F2F2F;
`;

const Excerpt = styled.p`
  margin-bottom: 0px;
  font-size: 18px;
  font-weight: 400;
  color: #292929;
`;

export { Main, Image, Title, Excerpt };
