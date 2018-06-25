import React from 'react';
import Img from "gatsby-image";
import GatsbyLink from 'gatsby-link'

import styles from './style.module.scss';

const Post = ({ path, title, excerpt, feature, date }) => {
  const content = (
    <div className={ styles.container }>
      <div className={ styles.imageContainer }>
        <img className={ styles.featuredImage } src={ feature.childImageSharp.sizes.src } />
      </div>

      <h1 className={ styles.title }>{ title }</h1>
      <p className={ styles.excerpt }>{ excerpt }</p>
    </div>
  );


  if (path.startsWith('/')) {
    return (
      <GatsbyLink exact to={ path }>
        { content }
      </GatsbyLink>
    );
  }

  return (
    <a href={ path } target='_blank'>
      { content }
    </a>
  );
};

export default Post;
