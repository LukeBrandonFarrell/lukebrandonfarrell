import React from 'react'
import Helmet from 'react-helmet'

import Thumbnail from "../components/thumbnail";
import Footer from '../components/footer'
import thumbnailImage from '../assets/thumbnail.jpg';

import '../vendor/css/fontawesome-all.min.css'
import './index.css'
import "prismjs/themes/prism-tomorrow.css";

class Layout extends React.Component {
  render(){
    const { children } = this.props;

    return (
      <div>
        <Helmet
          meta={[
            { name: 'description', content: 'Building complex systems through calculated and creative problem solving.' },
            { name: 'keywords', content: 'luke brandon farrell, complex, creative, full-stack, programmer, problems, javascript' },
          ]}
        />

        <Thumbnail source={thumbnailImage} />

        { children() }
        <Footer />
      </div>
    );
  }
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        tagline
        pages {
          home
        }
      }
    }
  }
`
