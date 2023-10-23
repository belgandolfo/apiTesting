import http from 'k6/http'
import { URL } from 'https://jslib.k6.io/url/1.0.0/index.js'
import getEnvironment from '../env/getEnvironment.js'

const baseUrl = getEnvironment().settings.baseUrl

export function getMetadataProperties(options, queryParams = {}) {
    const url = new URL(baseUrl + '/metadata-properties')
    for (let key in queryParams) {
        url.searchParams.append(key, queryParams[key])
    }
    return http.get(url.toString(), options)
}