import axios from 'axios';

const url = 'https://auth-server-opal.vercel.app'; 

export const signup = async ({ name, email, password }) => {
  try {
    const response = await axios.post(`${url}/signup`, { name, email, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Failed to signup');
  }
};

export const login = async ({ email, password }) => {
  try {
    const response = await axios.post(`${url}/login`, { email, password }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    

    const { token } = response.data;
    if (token) {
      localStorage.setItem('authToken', token);
    }
    
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Failed to login');
  }
};
