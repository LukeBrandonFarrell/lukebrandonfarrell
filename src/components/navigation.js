import React from 'react'
import styled from "styled-components";
import S from 'string';

import { Button } from './atoms'
import SocialPanel from './SocialPanel'
import Buttons from './Buttons'

import '../vendor/css/fontawesome-all.min.css'

const NavigationBar = styled.div`
  margin-bottom: 1.45rem;
  background-color: #020203;

  @media (max-width: 750px) {
    padding: 10px 0 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  max-width: 960px;
  margin: 0px auto;
`;

const Mobile = styled.div`
  flex-grow: 1;

  @media (max-width: 750px) {
    display: none;
  }
`;

const Navigation = ({ pages, folded }) => {
  return (
    <NavigationBar style={{ padding: folded ? '0px' : '20px 0px 0px' }}>
      <Wrapper>
        <Mobile>
          <Buttons pages={pages} />
        </Mobile>

        <SocialPanel />
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
