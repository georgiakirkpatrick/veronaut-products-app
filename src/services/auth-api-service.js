import config from '../config'

const AuthApiService = {
    postLogin(credentials) {
        return fetch(`${config.API_URL}/api/auth/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(credentials),
        })
        .then(response =>
            (!response.ok)
                ? response.json().then(error => Promise.reject(error))
                : response.json()
            )
    },
}

export default AuthApiService