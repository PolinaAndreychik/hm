const axios = require('axios');
const {Validator} = require('jsonschema');
const getBooksJsonSchema = require('../testData/putBooks.v1.json')

const validator = new Validator();

describe('API tests PUT', function () {
    let result;
    beforeAll(async () => {
        result = await axios.put('https://fakerestapi.azurewebsites.net/api/v1/Books/23', {
            "id": 0,
            "title": "string",
            "description": "string",
            "pageCount": 0,
            "excerpt": "string",
            "publishDate": "2024-03-24T17:03:27.480Z"
        }, {
            headers: {
                "accept": "*/*",
                "Content-Type": "application/json; v=1.0"
            }
        });
    })

    test('PUT /api/v1/Books should be status 200', async () => {
        expect(result.status).toEqual(200)
    })

    test('PUT /api/v1/Books should be valid jsonschema', async () => {
        const validationResult = await validator.validate(result.data, getBooksJsonSchema);
        expect(validationResult.valid).toEqual(true)
    })
})