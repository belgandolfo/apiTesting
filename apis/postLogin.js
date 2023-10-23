import http from 'k6/http'
import getEnvironment from '../env/getEnvironment.js'

const baseUrl = getEnvironment().settings.baseUrl

export function postLogin(options) {
    return http.post(baseUrl + '/security/users/login', null, options)
}