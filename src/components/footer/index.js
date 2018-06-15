import React from 'react';

import { Main, Copyright, Icons, Icon } from "./style.css.js";

const Footer = () => {
  return (
    <Main>
      <Copyright>&copy; { (new Date()).getFullYear() } Luke Brandon Farrell. All rights reserved.</Copyright>
      <Icons>
        <Icon className="fab fa-github" href="https://github.com/LukeBrandonFarrell" target="_blank" />
        <Icon className="fab fa-linkedin" href="https://www.linkedin.com/in/lukebrandonfarrell/" target="_blank" />
        <Icon className="fab fa-stack-overflow" href="https://stackoverflow.com/story/lukebrandonfarrell" target="_blank" />
        <Icon className="fab fa-twitter" href="https://twitter.com/settings/account" target="_blank" />
      </Icons>
    </Main>
  );
};

export default Footer;
