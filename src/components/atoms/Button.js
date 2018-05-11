import styled from 'styled-components'
import Link from 'gatsby-link'

const Button = styled(Link)`
  display: inline-block;
  padding: 0 20px;
  font-size: 1.0em;
  font-weight: 400;
  text-transform: uppercase;
  line-height: 50px;
  text-decoration: none;
  color: white;

  @media (max-width: 750px) {
    color: #2a2a2a;
  }

  :hover {
    color: #fff;
    background-color: #ff2828;
  }

  @media (max-width: 750px) {
    flex-grow: 1;
    text-align: center;
  }
`;

export { Button };
