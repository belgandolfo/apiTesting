import encoding from 'k6/encoding'
import { expect } from 'https://jslib.k6.io/k6chaijs/4.3.4.0/index.js'
import { postLogin } from '../apis/postLogin.js'
import getEnvironment from '../env/getEnvironment.js'

let h = { 'Authorization': `Basic ${encoding.b64encode('system:password')}` }

export default function(){
    console.log(getEnvironment())

    const res = postLogin({ headers: h })

    expect(res.status, 'response status').to.equal(200)
    expect(res.headers.Authorization).to.have.lengthOf.above(0)

    let authToken = res.headers.Authorization  
    return authToken
}