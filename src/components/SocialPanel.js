import React from 'react'
import styled from 'styled-components'

import { Icon } from './atoms'

const Social = styled.div`
  @media (max-width: 750px) {
    display: flex;
    width: 100%;
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 0 20px;
  font-size: 1.0em;
  font-weight: 400;
  text-transform: uppercase;
  line-height: 50px;
  text-decoration: none;
  color: white;

  :hover {
    color: #fff;
    background-color: #ff2828;
  }

  @media (max-width: 750px) {
    flex-grow: 1;
    text-align: center;
  }
`;

const SocialPanel = () => (
  <Social>
    <Button href='https://github.com/LukeBrandonFarrell' target="_blank">
      <Icon className="fab fa-github" />
    </Button>

    <Button href={'https://www.linkedin.com/in/lukebrandonfarrell/'}>
      <Icon className="fab fa-linkedin" />
    </Button>

    <Button href={'https://twitter.com/settings/account'}>
      <Icon className="fab fa-twitter" />
    </Button>

    <Button href={'https://twitter.com/settings/account'}>
      <Icon className="fab fa-stack-overflow" />
    </Button>

    <Button href={'https://stackoverflow.com/story/lukebrandonfarrell'}>
      <Icon className="fab fa-youtube" />
    </Button>
  </Social>
);

export default SocialPanel;
