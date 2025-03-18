import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import config from '../config'
import TokenService from '../services/token-service'

const RequireAuth = ({
  children = <div />,
  rest = ''
}) => {
  return <Routes>
    <Route
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
  </Routes>
}

export default RequireAuth