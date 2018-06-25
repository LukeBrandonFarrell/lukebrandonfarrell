import React from 'react';
import Helmet from 'react-helmet';

import styles from "./post.module.scss";

export default function Template({ data }) {
  const post = data.markdownRemark;
  console.log(data);
  return (
    <div className={ styles.postContainer }>
      <Helmet title={ post.frontmatter.title } />
      <h2 className={ styles.title }>{ post.frontmatter.title }</h2>
      <div className={ styles.metadata }>
        <p>Written by { post.frontmatter.author }</p>
        <p>{ post.frontmatter.date }</p>
      </div>
      <div className={ styles.postContent } dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        excerpt
        feature  {
          childImageSharp {
            sizes (maxWidth: 950) {
              src
            }
          }
        }
        author
      }
    }
  }
`;
