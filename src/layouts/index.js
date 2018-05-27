import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransitionGroup } from 'react-transition-group';
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Header from '../components/header'
import Navigation from '../components/navigation'
import SocialPanel from '../components/SocialPanel'
import Footer from '../components/Footer'
import Buttons from '../components/Buttons'

import './index.css'

class Layout extends React.Component {
  state = { navigationFolded: false, };

  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll.bind(this));
  };

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll.bind(this));
  };

  handleScroll(event) {
    if(window.scrollY > 0){
      this.setState({ navigationFolded: true });
    }
  };

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

      <CSSTransitionGroup
            transitionName="navigation"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
          <Header key='header' metadata={data.site.siteMetadata} folded={this.state.navigationFolded} />
          <Navigation key='navigation' pages={data.site.siteMetadata.pages} folded={this.state.navigationFolded} />
      </CSSTransitionGroup>
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children()}
        </div>
        <Footer>
          <Buttons pages={data.site.siteMetadata.pages} />
        </Footer>
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
          podcasts
          projects
        }
      }
    }
  }
`
