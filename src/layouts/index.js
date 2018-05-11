import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Header from '../components/header'
import Navigation from '../components/Navigation'
import SocialPanel from '../components/SocialPanel'

import './index.css'

const Footer = styled.div`
  display: none;

  @media (max-width: 750px) {
    display: block;
    position: fixed;
    bottom: 0;
    width: 100%;
    border-top: 1px solid #dbdbdb;
    background-color: #FFF;
  }
`;

const Layout = ({ children, data }) => {
  return (
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Header metadata={data.site.siteMetadata} />
      <Navigation pages={data.site.siteMetadata.pages} />
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
        <SocialPanel />
      </Footer>
    </div>
  );
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
