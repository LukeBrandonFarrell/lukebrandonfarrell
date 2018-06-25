import React from 'react'
import Link from 'gatsby-link'

import PostList from '../components/post-list'

export default function Index({
  data
}) {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <PostList posts={posts} />
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { type: { eq: "article" } } }
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
            feature  {
              childImageSharp {
                responsiveSizes (maxWidth: 200) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;
