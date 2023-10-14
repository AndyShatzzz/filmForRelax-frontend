import React from 'react';
import { Navigate } from 'react-router-dom';


const ProtectedRoute = ({ element: Component, ...props }) => {
  const jwt = localStorage.getItem('JWT');
  return (
    props.loggedIn || jwt ? <Component {...props} /> : <Navigate to="/" replace />

  )
}

export default ProtectedRoute; 