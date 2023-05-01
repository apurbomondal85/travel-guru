
import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../AuthProvider/AuthProvider'
import { Spinner } from 'react-bootstrap';

function PrivateRouter({ children }) {
    const { user, loader } = useContext(AuthContext);
    const location = useLocation();

    if (loader) {
        return <Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner>
    }
    if (user) {
        return children
    }

    return (<Navigate to='/login' state={{ form: location }} replace></Navigate>)
}

export default PrivateRouter
