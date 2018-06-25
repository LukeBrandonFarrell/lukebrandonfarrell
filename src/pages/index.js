import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import PostList from '../components/post-list'

export default function Index({
  data
}) {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <div>
      <Helmet title='Luke Brandon Farrell : Posts' />
      <PostList posts={posts} />
    </div>
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
                sizes (maxWidth: 950) {
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
