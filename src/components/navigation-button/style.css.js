import styled from "styled-components";
import Link from 'gatsby-link'

const Button = styled(Link)`
  display: inline-block;
  width: 120px;
  height: 40px;
  margin: 0px;
  box-sizing: border-box;
  color: white;
  line-height: 40px;
  text-align: center;
  font-size: 20px;
  text-decoration:none;
`;

const ButtonActive = {
  backgroundColor: 'white',
  color: 'black',
};

export { Button, ButtonActive };
