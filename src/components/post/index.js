import React from 'react';

import styles from './style.module.scss';

const Post = ({path, title, excerpt, feature, date, tags}) => {
    const tagsJsx = tags.split(",").map(tag => {
       return <div className={styles.tag}>{ tag }</div>;
    });

    const content = (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img className={styles.featuredImage} src={feature.childImageSharp.sizes.src}/>
            </div>

            <h1 className={styles.title}>{title}</h1>
            <p className={styles.excerpt}>{excerpt}</p>
            <div className={styles.tags}>
             { tagsJsx }
            </div>
        </div>
    );

    return (
        <a href={path}>
            {content}
        </a>
    );
};

export default Post;
