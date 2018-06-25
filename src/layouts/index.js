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
          meta={[
            { name: 'description', content: 'Building complex systems through calculated and creative problem solving.' },
            { name: 'keywords', content: 'luke brandon farrell, complex, creative, full-stack, programmer, problems, javascript' },
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
