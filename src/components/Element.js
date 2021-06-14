import React from 'react';
import styled from 'styled-components';

const Element = ({ element }) => {
  return (
    <ElementContainer
      xPosition={element.xpos}
      yPosition={element.ypos}
      category={element.category.split(' ').join('_')}
    >
      <ElementNumber>{element.number}</ElementNumber>
      <ElementSymbol>{element.symbol}</ElementSymbol>
      <ElementName>{element.name}</ElementName>
      <ElementAtomicMass>{element.atomic_mass.toFixed(3)}</ElementAtomicMass>
    </ElementContainer>
  );
};

const COLORS = {
  diatomic_nonmetal: 'blue',
  noble_gas: 'red',
  alkali_metal: 'purple',
  alkaline_earth_metal: 'brown',
  metalloid: 'silver',
  polyatomic_nonmetal: 'orange',
};

const ElementContainer = styled.div`
  background-color: ${(props) => COLORS[props.category]};
  background-color: ${(props) => console.log(props.category)};
  grid-column: ${(props) => props.xPosition};
  grid-row: ${(props) => props.yPosition};
  padding: 5px;
  margin: 3px;
  border: 1px solid grey;
  display: flex;
  flex-direction: column;
`;

const ElementSymbol = styled.strong`
  text-align: center;
  font-size: 1.2em;
  width: 100;
  justify-self: center;
`;

const ElementNumber = styled.small`
  font-size: 0.6em;
`;

const ElementName = styled.small`
  font-size: 0.7em;
  align-self: center;
  width: fit-content;
`;

const ElementAtomicMass = styled.small`
  font-size: 0.7em;
  align-self: center;
  width: fit-content;
`;

export default Element;
