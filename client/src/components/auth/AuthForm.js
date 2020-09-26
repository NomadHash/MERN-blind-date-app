import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import { Link } from 'react-router-dom';

const typeMap = {
  login: '로그인',
  register: '회원가입',
};

const AuthFormBlock = styled.div`
  h3 {
    color: #2b2b2b;
    text-align: center;
    margin-bottom: 1.5rem;
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  transition: all ease-in 0.2s;
  border-bottom: 1px solid #e5e5e5;
  font-family: inherit;
  &:focus {
    border-bottom: 1px solid #828282;
  }
  & + & {
    margin-top: 2rem;
  }
`;

const ButtonWithMargin = styled(Button)`
  margin-top: 1rem;
`;

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: end;
  
  a {
    color: #3D79F2;
    text-decoration: underline;
    
    &:hover {
      color: #2665ef;
    }
  }
`;

const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
  const text = typeMap[type];

  return (
      <AuthFormBlock>
        <h3>{text}</h3>
        <form onSubmit={onSubmit}>
          <StyledInput
              autoComplete="email"
              name="email"
              placeholder="이메일"
              onChange={onChange}
              value={form.username}
          />
          <StyledInput
              autoComplete="username"
              name="username"
              placeholder="아이디"
              onChange={onChange}
              value={form.username}
          />
          <StyledInput
              autoComplete="new-password"
              name="password"
              placeholder="비밀번호"
              type="password"
              onChange={onChange}
              value={form.password}
          />
          {type === 'register' && (
              <StyledInput
                  autoComplete="new-password"
                  name="passwordConfirm"
                  placeholder="비밀번호 확인"
                  type="password"
                  onChange={onChange}
                  value={form.passwordConfirm}
              />
          )}
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <ButtonWithMargin fullWidth>{text}</ButtonWithMargin>
        </form>
        <Footer>
          {type === 'login' ? (
              <Link to="/register">회원가입</Link>
          ) : (
              <Link to="/login">로그인</Link>
          )}
        </Footer>
      </AuthFormBlock>
  );
};

export default AuthForm;
