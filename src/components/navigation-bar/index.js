import React from 'react';
import S from 'string';

import NavigationButton from '../navigation-button';
import NavigationTitle from '../navigation-title';

import styles from "./style.module.scss";

/**
* @render react
* @name NavigationBar
* @example
* <NavigationBar />
*/

const NavigationBar = ({ pages }) => {
  const links = Object.entries(pages).map(function(element, i) {
    return (
      <NavigationButton key={ i } label={ S(element[0]).capitalize().s } link={ element[1] } />
    );
  });

  return (
    <div className={ styles.container }>
      <NavigationTitle label='LUKE BRANDON FARRELL' />
      { links }
    </div>
  );
};

export default NavigationBar;
