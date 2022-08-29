import config from '../config'

const TokenService = {
    clearAuthToken() {
        window.localStorage.removeItem(config.TOKEN_KEY)
    },

    getAuthToken() {
        return window.localStorage.getItem(config.TOKEN_KEY)
    },

    hasAuthToken() {
        return !!TokenService.getAuthToken()
    },

    makeBasicAuthToken(email, password) {
        return window.btoa(`${email}:${password}`)
    },

    saveAuthToken(token) {
        window.localStorage.setItem(config.TOKEN_KEY, token)
    }

}

export default TokenService