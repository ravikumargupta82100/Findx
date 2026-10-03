import React from 'react'
import { Navigate,Outlet } from 'react-router-dom';

function PublicRoutes() {
  
    const token=localStorage.getItem("token");
    if(token)
    {
        return <Navigate to="/home" replace/>
    }
  return <Outlet/>;
}

export default PublicRoutes
