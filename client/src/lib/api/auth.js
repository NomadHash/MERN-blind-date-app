import client from './client';

// login
export const login = ({ email, password }) =>
  client.post('/api/auth/login', { email, password });

// register
export const register = ({ email, username, password }) =>
  client.post('/api/auth/register', { email, username, password });

// check login state
export const check = () => client.get('/api/auth/check');

// logout
export const logout = () => client.post('/api/auth/logout');
