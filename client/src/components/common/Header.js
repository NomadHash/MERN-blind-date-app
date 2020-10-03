import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import { Link } from 'react-router-dom';
import Button from './Button';

const HeaderBlock = styled.div`
  width: 100%;
  position: fixed;
  top: 1rem;
`;

const HeaderWrapper = styled(Responsive)`
  display: flex;
  background: #fff;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  border-radius: 13px;
  height: 4rem;
  justify-content: space-between;
  align-items: center;
  color: #0c4ccb;
  overflow: hidden;

  .logo {
    display: flex;
    font-weight: bold;
    font-size: 1.125rem;
    padding: 0 1rem;
    background: #0c4ccb;
    color: #fff;
    height: 100%;
    align-items: center;
  }

  .right {
    display: flex;
    align-items: center;
  }
`;

const SpaceBlock = styled.div`
  height: 4rem;
`;

const UserInfo = styled.div`
  font-weight: bold;
`;

const Header = ({ user, onLogout }) => {
  return (
    <>
      <HeaderBlock>
        <HeaderWrapper>
          <Link to="/" className="logo">
            MERN
          </Link>
          {user ? (
            <div className="right">
              <UserInfo>{user.username}</UserInfo>
              <Button onClick={onLogout}>로그아웃</Button>
            </div>
          ) : (
            <div className="right">
              <Button to="/login">로그인</Button>
            </div>
          )}
        </HeaderWrapper>
      </HeaderBlock>
      <SpaceBlock />
    </>
  );
};

export default Header;
