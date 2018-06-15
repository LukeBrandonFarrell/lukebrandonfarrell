import React from 'react';

import { Main, Image, Title, Excerpt } from "./style.css.js";

const Post = ({ path, title, excerpt, date }) => {
  return (
    <Main exact to={ path }>
      <Image src='http://via.placeholder.com/350x150'  />
      <Title>{ title }</Title>
      <Excerpt>{ excerpt }</Excerpt>
    </Main>
  );
};

export default Post;
