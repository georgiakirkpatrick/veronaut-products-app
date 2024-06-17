import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import config from '../config'
import TokenService from '../services/token-service'

const RequireAuth = props => {
    const {
        children,
        ...rest
    } = props

    return <Route
        {...rest} 
        render={routeProps => TokenService.getAuthToken(config.TOKEN_KEY)
            ? children
            : <Navigate
                to={{
                    pathname: '/login',
                    state: { referrer: routeProps.location.pathname}
                }}
            />
        }
    />
}

export default RequireAuth