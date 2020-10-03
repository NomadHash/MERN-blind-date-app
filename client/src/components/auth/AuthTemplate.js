import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AuthTemplateBlock = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #3d79f2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WhiteBlock = styled.div`
  background: #fff;
  padding: 3rem 5rem;
  border-radius: 10px;
  width: 500px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);

  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1.5rem;
  }
`;

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <WhiteBlock>
        <div className="logo-area">
          <Link to="/">MERN</Link>
        </div>
        {children}
      </WhiteBlock>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;
