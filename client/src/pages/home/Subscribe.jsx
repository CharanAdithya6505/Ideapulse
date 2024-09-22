import React, { useState } from 'react';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  // Regular expression to validate the email format
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubscribe = () => {
    if (!email) {
      setError('Email is required');
    } else if (!emailPattern.test(email)) {
      setError('Please enter a valid email address');
    } else {
      setIsSubscribed(true);
      setError(''); // Clear error if validation passes
    }
  };

  const closePopup = () => {
    setIsSubscribed(false);
    setEmail('');  // Clear the input after subscription
  };

  return (
    <div className="p-1 mt-4 mb-4 relative">
      <h5 className="font-bold text-lg uppercase text-gray-700 mb-2">Subscribe</h5>
      <p className="text-gray-600">
        Subscribe to our blog. We deliver the best health-related articles to your inbox.
      </p>
      <input 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your email address"
        className="text-gray-700 bg-gray-100 rounded-t hover:outline-none p-2 w-full mt-4 border" 
      />
      
      {/* Display error message if email validation fails */}
      {error && <p className="text-red-500 mt-2">{error}</p>}
      
      <button 
        onClick={handleSubscribe}
        className="px-4 py-2 bg-black mt-7 text-slate-100 rounded-b w-full capitalize tracking-wide">
        Subscribe
      </button>

      {/* Popup modal */}
      {isSubscribed && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <h5 className="font-bold text-lg text-gray-800">Success!</h5>
            <p className="text-gray-600 mt-4">
              You have successfully subscribed to the blog with the email: 
              <strong className="block mt-2 text-black">{email}</strong>
            </p>
            <button 
              onClick={closePopup}
              className="mt-6 px-4 py-2 bg-black text-white rounded">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Subscribe;
