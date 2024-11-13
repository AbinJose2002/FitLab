// src/NumberConverter.js
import React, { useState } from 'react';
import styled from 'styled-components';

const ConverterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const InputField = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  width: 200px;
  font-size: 16px;
`;

const Result = styled.div`
  margin-top: 10px;
  font-size: 18px;
`;

const NumberConverter = () => {
  const [decimal, setDecimal] = useState('');
  const [binary, setBinary] = useState('');
  const [octal, setOctal] = useState('');
  const [hexadecimal, setHexadecimal] = useState('');

  const handleDecimalChange = (e) => {
    const value = e.target.value;
    setDecimal(value);
    updateOtherFormats(value, 'decimal');
  };

  const handleBinaryChange = (e) => {
    const value = e.target.value;
    setBinary(value);
    updateOtherFormats(value, 'binary');
  };

  const handleOctalChange = (e) => {
    const value = e.target.value;
    setOctal(value);
    updateOtherFormats(value, 'octal');
  };

  const handleHexadecimalChange = (e) => {
    const value = e.target.value;
    setHexadecimal(value);
    updateOtherFormats(value, 'hexadecimal');
  };

  const updateOtherFormats = (value, format) => {
    switch (format) {
      case 'decimal':
        setBinary(parseInt(value).toString(2));
        setOctal(parseInt(value).toString(8));
        setHexadecimal(parseInt(value).toString(16).toUpperCase());
        break;
      case 'binary':
        setDecimal(parseInt(value, 2).toString());
        setOctal(parseInt(value, 2).toString(8));
        setHexadecimal(parseInt(value, 2).toString(16).toUpperCase());
        break;
      case 'octal':
        setDecimal(parseInt(value, 8).toString());
        setBinary(parseInt(value, 8).toString(2));
        setHexadecimal(parseInt(value, 8).toString(16).toUpperCase());
        break;
      case 'hexadecimal':
        setDecimal(parseInt(value, 16).toString());
        setBinary(parseInt(value, 16).toString(2));
        setOctal(parseInt(value, 16).toString(8));
        break;
      default:
        break;
    }
  };

  return (
    <ConverterContainer>
      <h1>Number Format Converter</h1>
      <InputField
        type="number"
        value={decimal}
        onChange={handleDecimalChange}
        placeholder="Decimal"
      />
      <InputField
        type="text"
        value={binary}
        onChange={handleBinaryChange}
        placeholder="Binary"
      />
      <InputField
        type="text"
        value={octal}
        onChange={handleOctalChange}
        placeholder="Octal"
      />
      <InputField
        type="text"
        value={hexadecimal}
        onChange={handleHexadecimalChange}
        placeholder="Hexadecimal"
      />
    </ConverterContainer>
  );
};

export default NumberConverter;