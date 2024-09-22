import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to="/auth" />;
  }
  return element;
};

export default ProtectedRoute;
