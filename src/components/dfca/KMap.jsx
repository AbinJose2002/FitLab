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
    const minterms = [];
    for (let i = 0; i < map.length; i++) {
      if (map[i]) {
        minterms.push(i.toString(2).padStart(4, '0'));
      }
    }

    const simplifiedEquation = simplifyMinterms(minterms);
    setEquation(simplifiedEquation || '0'); // Set default to 0 if no minterms selected
  };

  // Simplified Quine-McCluskey Algorithm

  const simplifyMinterms = (minterms) => {
    let groups = [[...minterms]]; // Initial groups with single minterms
    let simplified = false;

    // Iterate until no further simplification is possible
    while (!simplified) {
      simplified = true;

      // Combine adjacent groups with 1 bit difference
      const newGroups = [];
      for (let i = 0; i < groups.length - 1; i++) {
        const group1 = groups[i];
        for (let j = i + 1; j < groups.length; j++) {
          const group2 = groups[j];
          const diffCount = group1[0].split('').filter((char, index) => char !== group2[0][index]).length;

          if (diffCount === 1) {
            simplified = false;
            const combined = group1.concat(group2).map(m => {
              const bits = m.split('');
              for (let k = 0; k < 4; k++) {
                if (bits[k] !== bits[k + 1]) {
                  bits[k] = '-';
                }
              }
              return bits.join('');
            });
            newGroups.push(combined);
          } else {
            newGroups.push(group1);
          }
        }
      }
      newGroups.push(...groups.slice(-1)); // Add remaining groups

      // Remove redundant groups
      groups = newGroups.filter((group, index, self) => {
        for (let j = index + 1; j < self.length; j++) {
          if (isSubset(group, self[j])) {
            return false;
          }
        }
        return true;
      });
    }

    // Convert simplified groups to product terms
    const productTerms = groups.map(group => group[0].replace(/-/g, ''));
    return productTerms.join(' + ');
  };

  const isSubset = (group1, group2) => {
    for (let i = 0; i < group1.length; i++) {
      if (group1[i] !== '-' && group1[i] !== group2[i]) {
        return false;
      }
    }
    return true;
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