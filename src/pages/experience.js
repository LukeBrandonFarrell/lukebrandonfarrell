import React from 'react'
import styled from 'styled-components'

import PostList from '../components/post-list'

export default function Projects({
  data
}) {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <PostList posts={posts} />
  );
}

export const pageQuery = graphql`
  query ExperienceQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { type: { eq: "experience" } } }
    ) {
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
