import React from 'react'
import Helmet from 'react-helmet'

import PostList from '../components/post-list'

export default function Projects({
  data
}) {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <div>
      <Helmet title='Luke Brandon Farrell : Experience' />
      <PostList posts={posts} />
    </div>
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
