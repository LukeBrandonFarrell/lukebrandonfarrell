import React from 'react'
import styled from 'styled-components'

import { Title, Post, Posts } from '../components/atoms'

const Date = styled.p`
  margin-bottom: 8px;
  font-size: 1.0em;
  color: #222253;
`;

export default function Index({
  data
}) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Posts>
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <Post key={post.id}>
              <Title to={post.frontmatter.path}>
                {post.frontmatter.title}
              </Title>
              <Date>{post.frontmatter.date}</Date>
              <p>{post.frontmatter.excerpt}</p>
            </Post>
          );
        })}
    </Posts>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            excerpt
          }
        }
      }
    }
  }
`;
