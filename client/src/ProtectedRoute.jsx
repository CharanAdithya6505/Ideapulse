import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
  const token = localStorage.getItem('token'); // Check if the token exists

  if (!token) {
    // If no token, redirect to /auth
    return <Navigate to="/auth" />;
  }

  // If token exists, render the element (i.e., SingleBlog)
  return element;
};

export default ProtectedRoute;
