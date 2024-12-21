// import React, { useState } from 'react';
import UseAuth from '../Hooks/UseAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user}=UseAuth()
    const location=useLocation()




    if (!user){
        return <Navigate to={'/login'} state={location?.pathname || '/'}></Navigate>
    }
     return (
        <div>
        {children}
        </div>
    );
};

export default PrivateRoute;