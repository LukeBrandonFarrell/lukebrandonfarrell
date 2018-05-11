import React from 'react'
import styled from "styled-components";
import S from 'string';

import { Button } from './atoms'
import SocialPanel from './SocialPanel'

import '../vendor/css/fontawesome-all.min.css'

const NavigationBar = styled.div`
  margin-bottom: 1.45rem;
  padding: 20px 0 0;
  background-color: #020203;
`;

const Wrapper = styled.div`
  display: flex;
  max-width: 960px;
  margin: 0px auto;
`;

const Buttons = styled.div`
   flex-grow: 1;

   @media (max-width: 750px) {
     display: flex;
   }
`;

const Mobile = styled.div`
  @media (max-width: 750px) {
    display: none;
  }
`;

const Navigation = ({ pages }) => {
  const links = Object.entries(pages).map(function(element, i) {
    return (
      <Button key={i} exact to={element[1]} style={{ color: 'white' }} activeStyle={{ backgroundColor: 'white', color: '#020203' }} >
        { S(element[0]).capitalize().s }
      </Button>
    );
  });

  return (
    <NavigationBar>
      <Wrapper>
        <Buttons>
          { links }
        </Buttons>

        <Mobile>
          <SocialPanel />
        </Mobile>
      </Wrapper>
    </NavigationBar>
  )
}

let styles = {
  linkStyle: {
    backgroundColor: 'red'
  }
}

export default Navigation
