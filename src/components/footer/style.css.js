import styled from "styled-components";

const Main =  styled.p`
  margin: 30px 0px;
`;

const Copyright =  styled.p`
  flex: 1;
  flex-grow: 1;
  color: #666666;
  text-align: center;
`;

const Icons = styled.div`
  text-align: center;
`;

const Icon = styled.a`
  display: inline-block;
  width: 50px;
  color: black;
  font-size: 1.7em;
  cursor: pointer;
  text-decoration: none;

  :hover {
    color: #9E170B;
  }
`;

export { Main, Copyright, Icons, Icon };
