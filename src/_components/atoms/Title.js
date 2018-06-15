import Link from 'gatsby-link'
import styled from 'styled-components'

const Title = styled(Link)`
  margin-bottom: 8px;
  font-size: 1.2em;
  font-weight: bold;
  color: #000;
  text-decoration: none;
  text-transform: uppercase;

  :hover {
    color: #ff2828;
    text-decoration: underline;
  }
`;

export { Title };
