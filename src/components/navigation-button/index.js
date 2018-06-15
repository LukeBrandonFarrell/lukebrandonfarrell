import React from 'react';

import { Button, ButtonActive } from "./style.css.js";

const NavigationButton = ({ label, link }) => {
  return (
    <Button exact to={ link } activeStyle={ ButtonActive }>
      { label }
    </Button>
  );
};

export default NavigationButton;
