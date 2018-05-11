import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: #020203;
  padding: 20px 0 0;
`;

const Wrapper = styled.div`
  max-width: 960px;
  margin: 0px auto;
  border-bottom: 1px solid #999;

  @media (max-width: 960px) {
    padding: 0px 20px;
    border-bottom: none;
  }
`;

const Title = styled.div`
  font-size: 4.25em;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;

  @media (max-width: 960px) {
    font-size: 3em;
  }
`;

const Tagline = styled.div`
  font-size: 1.0em;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 50px;

  @media (max-width: 960px) {
    font-size: 0.8em;
    line-height: 30px;
  }
`;

const Header = ({ metadata }) => {
  const { title, tagline } = metadata;

  return (
    <Container>
      <Wrapper>
        <Title>{title}</Title>
        <Tagline>{tagline}</Tagline>
      </Wrapper>
    </Container>
  );
};

export default Header
