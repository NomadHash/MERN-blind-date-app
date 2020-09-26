import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const buttonStyle = css`
  border: none;
  border-radius: 4px;
  font-weight: bold;
  padding: 0.5rem 1rem;
  color: #fff;
  outline: none;
  cursor: pointer;
  font-size: 1rem;
  background-color: #3D79F2;
  transition: background-color .3s ease;
  font-family: inherit;
  
  &:hover {
    background-color: #5e8de9;
  }
  
  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
    `}
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const StyledLink = styled(Link)`
  ${buttonStyle}
`;

const Button = props => {
  return props.to ? (
      <StyledLink {...props} />
  ) : (
      <StyledButton {...props} />
  );
};

export default Button;
