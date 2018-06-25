import React from 'react';
import Post from '../post'

import styles from './style.module.scss';

const PostList = ({ posts }) => {
  return (
    <div className={ styles.list }>
      { posts.map(({ node: post }) => {
          return (
            <Post
              key={post.id}
              path={post.frontmatter.path}
              title={post.frontmatter.title}
              excerpt={post.frontmatter.excerpt}
              feature={post.frontmatter.feature}
              date={post.frontmatter.date}
              external={post.frontmatter.external} />
          );
       })}
    </div>
  );
};

export default PostList;
