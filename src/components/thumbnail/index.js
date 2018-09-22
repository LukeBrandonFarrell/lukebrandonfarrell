import React from 'react';

import styles from './style.module.scss';

const Thumbnail = ({ source }) => {
    return (
        <img src={source} className={ styles.thumbnail } />
    );
};

export default Thumbnail;