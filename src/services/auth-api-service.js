import config from '../config'

const AuthApiService = {
  createUser(credentials) {
    return fetch(`${import.meta.env.VITE_API_URL}/api/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(credentials)
    })
    .then(response =>
      (!response.ok)
        ? response.json().then(error => Promise.reject(error))
        : response.json()
    )
  },
  postLogin(credentials) {
    return fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(credentials)
    })
    .then(response =>
      (!response.ok)
        ? response.json().then(error => Promise.reject(error))
        : response.json()
        )
  }
}

export default AuthApiService