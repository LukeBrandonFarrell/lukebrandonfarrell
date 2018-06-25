import React from 'react';

import styles from './style.module.scss';

const NavigationTitle = ({ label }) => {
  return (
    <p className={ styles.title }>{ label }</p>
  );
};

export default NavigationTitle;
