import React from 'react';

import styles from "./style.module.scss";

const Footer = () => {
  return (
    <div className={ styles.container }>
      <hr className={ styles.divider } />
      <p className={ styles.copyright }>&copy; { (new Date()).getFullYear() } Luke Brandon Farrell. All rights reserved.</p>
      <div className={ styles.icons }>
        <a className={[ styles.icon, 'fab fa-github' ].join(' ')} href="https://github.com/LukeBrandonFarrell" target="_blank" />
        <a className={[ styles.icon, 'fab fa-linkedin' ].join(' ')} href="https://www.linkedin.com/in/lukebrandonfarrell/" target="_blank" />
        <a className={[ styles.icon, 'fab fa-stack-overflow' ].join(' ')} href="https://stackoverflow.com/story/lukebrandonfarrell" target="_blank" />
      </div>
    </div>
  );
};

export default Footer;
