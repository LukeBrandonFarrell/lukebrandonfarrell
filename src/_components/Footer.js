import styled from 'styled-components'

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

export default Footer;
