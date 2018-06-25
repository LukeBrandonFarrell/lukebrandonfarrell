import React from 'react';
import GatsbyLink from 'gatsby-link';

import styles from "./style.module.scss";

const NavigationButton = ({ label, link }) => {
  console.log(styles);
  return (
    <GatsbyLink exact to={ link } className={ styles.button } activeClassName={ styles.buttonActive }>
      { label }
    </GatsbyLink>
  );
};

export default NavigationButton;
