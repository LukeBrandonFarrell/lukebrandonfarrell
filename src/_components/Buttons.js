import React from 'react'
import styled from "styled-components";
import S from 'string';

import { Button } from './atoms'

const Group = styled.div`
   flex-grow: 1;

   @media (max-width: 750px) {
     display: flex;
   }
`;

const Buttons = ({ pages }) => {
  const links = Object.entries(pages).map(function(element, i) {
    return (
      <Button key={i} exact to={element[1]} activeStyle={{ backgroundColor: 'white', color: '#020203' }} >
        { S(element[0]).capitalize().s }
      </Button>
    );
  });

  return (
    <Group>
      { links }
    </Group>
  )
}

export default Buttons
