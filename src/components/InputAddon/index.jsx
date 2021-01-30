/* eslint-disable react/button-has-type */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import db from '../../../db.json';

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

function InputAddon({ text, placeholder, btnType }) {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <Wrapper>
      <form onSubmit={(e) => {
        e.preventDefault();
        router.push(`/quiz?name=${name}`);
      }}
      >
        <input
          type="text"
          placeholder={placeholder}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button type={btnType} disabled={name.length < 1}>{text}</button>
      </form>
    </Wrapper>
  );
}

InputAddon.propTypes = {
  text: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  btnType: PropTypes.string,
};

InputAddon.defaultProps = {
  btnType: 'button',
};

export default InputAddon;
