import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup, login, googleSignIn } from './api'; 

function Auth() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [isSignup, setIsSignup] = useState(true);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const clearForm = () => {
    setFormData({
      name: '',
      email: '',
      password: ''
    });
  };

  const storeEmailPrefix = (email) => {
    if (email.includes('@gmail.com')) {
      const emailPrefix = email.split('@')[0];
      localStorage.setItem('emailPrefix', emailPrefix);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = formData;
    
    try {
      const response = isSignup ? await signup({ name, email, password }) : await login({ email, password });
      alert(isSignup ? 'Signup successful!' : 'Login successful!');
      clearForm();

      if (isSignup) {
        setIsSignup(false);
        navigate('/auth');
      } else {
        localStorage.setItem('token', response.token); 
        storeEmailPrefix(email); // Store the email prefix in localStorage
        navigate('/');
      }
    } catch (error) {
      alert(error.message || 'Something went wrong');
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const response = await googleSignIn();
      alert('Google Sign-In successful!');
      localStorage.setItem('token', response.token);
      storeEmailPrefix(response.email); // Store the Google account email prefix in localStorage
      navigate('/');
    } catch (error) {
      alert(error.message || 'Google Sign-In failed');
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      <form className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg mt-24" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6 text-center">{isSignup ? 'Signup' : 'Login'}</h2>
        {isSignup && (
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        )}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          {isSignup ? 'Signup' : 'Login'}
        </button>
        <button
          type="button"
          onClick={() => setIsSignup(!isSignup)}
          className="w-full mt-4 px-4 py-2 bg-gray-300 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          {isSignup ? 'Already have an account? Login' : 'Don\'t have an account? Signup'}
        </button>

        {/* Google Sign-In Button */}
        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="w-full mt-4 px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Sign in with Google
        </button>
      </form>
    </div>
  );
}

export default Auth;
