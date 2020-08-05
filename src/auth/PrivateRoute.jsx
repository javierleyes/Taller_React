import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import * as AuthService from './AuthService'

const PrivateRoute = ({children, ...rest}) => {
    return (
        AuthService.isLogged() ?
            <Route {...rest}>
                {children}
            </Route> :
            <Redirect to='login' />
    )
}

export default PrivateRoute
