
const TOKEN_KEY = 'token';

export const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

// import { log } from 'console';
// export const login = (token) => {
//   localStorage.setItem(TOKEN_KEY, token);
// };

// export const logout = () => {
//   localStorage.removeItem(TOKEN_KEY);
// };



// import dotenv from 'dotenv';
// import path from 'path';

// const envPath = path.resolve(__dirname, '../../../.env'); // Adjust the path to your .env file

// dotenv.config({ path: envPath });

// console.log(process.env.REACT_APP_API_BASE_URL);