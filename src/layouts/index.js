import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import NavigationBar from '../components/navigation-bar'
import Footer from '../components/footer'

import '../vendor/css/fontawesome-all.min.css'
import './index.css'

require("prismjs/themes/prism-tomorrow.css");

class Layout extends React.Component {
  render(){
    const { children, data } = this.props;

    return (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />

        <NavigationBar pages={data.site.siteMetadata.pages} />
        { children() }
        <Footer />
      </div>
    );
  }
};

Layout.propTypes = {
  children: PropTypes.func,
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
          projects
          experience
        }
      }
    }
  }
`
