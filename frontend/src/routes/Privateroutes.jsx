import React from 'react'
import { useNavigate, useLocation, Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../store/context/AuthContext'

const Privateroutes = ({allowedUser}) => {
  console.log("allowed user: ", allowedUser);
let {isAuthenticated, role, loading} = useAuth(); // accessing the data of user from centralized store 

// accessing the current url to redirect the user to different pages
let location = useLocation();

// making app wait until auth checks are done
if(loading) return null;

// if not looged-in then redirect
if(!isAuthenticated){
  return <Navigate to={'/auth'} state={{from:location}} replace />
}

// role verification
if(allowedUser && !allowedUser.includes(role)){
  return <Navigate to={'/unauthorized'} replace />
}

  return <Outlet/> // renders and displays the children element based on auth
}

export default Privateroutes
