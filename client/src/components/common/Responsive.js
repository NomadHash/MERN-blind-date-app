import React from 'react';
import styled from 'styled-components';

const ResponsiveBlock = styled.div`
  width: 1180px;
  margin: 0 auto;
  
  @media (max-width: 1180px) {
    width: 1024px;
  }
  
  @media (max-width: 1024px) {
    width: 768px;
  }
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Responsive = ({ children, ...props }) => {
  // style, className 등 props 전달하기 위해 ...props를 이용
  return <ResponsiveBlock {...props}>{children}</ResponsiveBlock>;
};

export default Responsive;