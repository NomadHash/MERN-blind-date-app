import React from 'react';
import styled from 'styled-components';

const WhiteBoardTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0c4ccb;
  height: 40px;
  border-radius: 10px 10px 0 0;
  color: #fff;
  box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.15);
`;

const WhiteBoardBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  background: #fff;
  border-radius: 0 0 10px 10px;
  box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.15);
`;

const WhiteBoard = ({ title, children, ...props }) => {
  return (
    <div {...props}>
      <WhiteBoardTop>{title}</WhiteBoardTop>
      <WhiteBoardBlock>{children}</WhiteBoardBlock>
    </div>
  );
};

export default WhiteBoard;
