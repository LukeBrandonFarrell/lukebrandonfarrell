import React from 'react';
import Img from "gatsby-image";

import { Main, Title, Image, Excerpt } from "./style.css.js";

const Post = ({ path, title, excerpt, feature, date }) => {
  console.log(feature);
  return (
    <Main exact to={ path }>
      <Img sizes={ feature } />
      <Title>{ title }</Title>
      <Excerpt>{ excerpt }</Excerpt>
    </Main>
  );
};

export default Post;
