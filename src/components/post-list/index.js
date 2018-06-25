import React from 'react';
import Post from '../post'

import { List } from "./style.css.js";

const PostList = ({ posts }) => {
  return (
    <List>
      { posts.map(({ node: post }) => {
          console.log(post);
          return (
            <Post
              key={post.id}
              path={post.frontmatter.path}
              title={post.frontmatter.title}
              excerpt={post.frontmatter.excerpt}
              feature={post.frontmatter.feature}
              date={post.frontmatter.date} />
          );
       })}
    </List>
  );
};

export default PostList;
