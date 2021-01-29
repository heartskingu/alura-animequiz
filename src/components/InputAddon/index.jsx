import React from 'react';
import db from '../../../db.json';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 85px;
  
  input {
    height: 48px; 
    width: 367px;
    background: ${db.theme.colors.neutralLight};
    border: none;
    padding: 12px 16px;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    border-radius: 4px;
    color: #ffffff;
    color: ${db.theme.colors.primaryLight};

    &::placeholder {
        color: #68449D;
        font-size: 16px;
        font-family: 'Roboto', sans-serif;
    }
  }

  button {
      position: absolute;
      top: 0; right: 0;
      height: calc(100% - 8px);
      padding: 12px 42px;
      margin: 4px;
      background: ${db.theme.colors.primary};
      border: none;
      border-radius: 8px;
      color: ${db.theme.colors.neutralLight};
      font-family: 'Roboto', sans-serif;
      font-size: 14px;
      font-weight: bold;
      box-shadow: 0px 3px 16px rgba(227, 86, 214, 0.4);
      cursor: pointer;
  }
`;

export default function InputAddon({ text, placeholder }) {
    return (
        <Wrapper>
            <input type='text' placeholder={placeholder} />
            <button>{text}</button>
        </Wrapper>
    );
}