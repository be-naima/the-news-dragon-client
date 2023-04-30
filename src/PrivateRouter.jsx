import React from 'react';
import { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const PrivateRouter = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <Spinner animation="border" variant="primary" />
    }
    if(user)
     {
        return children
     }
     return <Navigate state={{from:location}} to='/login'  replace></Navigate>
};

export default PrivateRouter;