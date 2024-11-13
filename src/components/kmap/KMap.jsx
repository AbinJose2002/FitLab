// src/KMap.js
import React, { useState } from 'react';
import styled from 'styled-components';

const KMapContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: repeat(4, 100px);
  gap: 5px;
`;

const Cell = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${props => (props.active ? '#4caf50' : '#fff')};
`;

const KMap = () => {
  const [map, setMap] = useState(Array(16).fill(false));
  const [equation, setEquation] = useState('');

  const toggleCell = (index) => {
    const newMap = [...map];
    newMap[index] = !newMap[index];
    setMap(newMap);
    generateEquation(newMap);
  };

  const generateEquation = (map) => {
    const variables = ['A', 'B', 'C', 'D'];
    const minterms = [];

    map.forEach((active, index) => {
      if (active) {
        const binary = index.toString(2).padStart(4, '0');
        const minterm = variables.map((variable, i) => {
          if (binary[i] === '1') return variable;
          else return `!${variable}`;
        }).join('');
        minterms.push(minterm);
      }
    });

    if (minterms.length === 0) {
      setEquation('');
    } else if (minterms.length === 1) {
      setEquation(minterms[0]);
    } else {
      const simplifiedEquation = simplifyEquation(minterms);
      setEquation(simplifiedEquation);
    }
  };

  const simplifyEquation = (minterms) => {
    const simplifiedMinterms = [];

    minterms.forEach((minterm) => {
      const found = simplifiedMinterms.find((simplifiedMinterm) => {
        return isSubset(minterm, simplifiedMinterm);
      });

      if (!found) {
        simplifiedMinterms.push(minterm);
      }
    });

    return simplifiedMinterms.join(' + ');
  };

  const isSubset = (minterm, simplifiedMinterm) => {
    const mintermVariables = minterm.replace(/!/g, '').split('');
    const simplifiedMintermVariables = simplifiedMinterm.replace(/!/g, '').split('');

    return mintermVariables.every((variable) => {
      return simplifiedMintermVariables.includes(variable);
    });
  };

  return (
    <KMapContainer>
      {map.map((active, index) => (
        <Cell key={index} active={active} onClick={() => toggleCell(index)}>
          {active ? '1' : '0'}
        </Cell>
      ))}
      <p>Equation: {equation}</p>
    </KMapContainer>
  );
};

export default KMap;