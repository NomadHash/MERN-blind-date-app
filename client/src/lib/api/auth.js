import client from './client';

// login
export const login = ({ username, password }) =>
    client.post('/api/auth/login', { email, username, password });

// register
export const register = ({ username, password }) =>
    client.post('/api/auth/register', { email, username, password });

// check login state
export const check = () => client.get('/api/auth/check');

// logout
export const logout = () => client.post('/api/auth/logout');
