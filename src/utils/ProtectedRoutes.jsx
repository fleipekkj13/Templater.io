import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoutes = () => {
  const auth = localStorage.getItem('auth');
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;