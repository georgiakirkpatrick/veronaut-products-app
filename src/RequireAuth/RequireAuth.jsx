import { React, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import config from '../config'
import TokenService from '../services/token-service'

const RequireAuth = ({
  children = <div />
}) => {
  const location = useLocation()
  const navigate = useNavigate()

  const hasToken = TokenService.getAuthToken(config.TOKEN_KEY)

  useEffect(() => {
    if (!hasToken) {
      navigate('/login', {
        replace: true,
        state: { referrer: location.pathname}
      })
    }
  }, [!hasToken, navigate, location])

  if (!hasToken) return null

  return children
}

export default RequireAuth