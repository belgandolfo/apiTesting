import { expect } from 'https://jslib.k6.io/k6chaijs/4.3.4.0/index.js'
import { getAuthToken } from './common/getAuthToken.js'
import { getMetadataProperties } from '../apis/getMetadataProperties.js'

export default function () {
    const token = getAuthToken()
    let h = { 'Authorization': `${token}` }

    const response = getMetadataProperties({ headers: h }, { 'includeArchived': 'false', 'fetchOffset': '0', 'fetchLimit': '100', 'includeTechnicalMetadata': 'false' })
    const rows = JSON.parse(response.body).rows
    
    expect(response.status, "response status").to.equal(200)
    expect(response).to.have.validJsonBody()

    rows.forEach((row, index) => {
        expect(row.owners).to.not.equal('[ "Technical Metadata" ]', `Metadata properties row ${index}`)
    })
}