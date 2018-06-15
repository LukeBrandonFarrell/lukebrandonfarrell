import React from 'react';

import { Title } from "./style.css.js";

const NavigationTitle = ({ label }) => {
  return (
    <Title>{ label }</Title>
  );
};

export default NavigationTitle;
