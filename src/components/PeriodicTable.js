import React from 'react';
import styled from 'styled-components';
import data from '../data/periodictable.json';
import Element from './Element';

const PeriodicTable = () => {
  return (
    <PeriodicTableContainer>
      <h2>Tabela Periódica</h2>
      <PeriodicTableContent>
        {data.elements.map((element) => (
          <Element element={element} />
        ))}
      </PeriodicTableContent>
    </PeriodicTableContainer>
  );
};

const PeriodicTableContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const PeriodicTableContent = styled.div`
  display: grid;
  grid-template-columns: repeat(18, 75px);
  grid-template-rows: repeat(10, 75px);
`;

export default PeriodicTable;
