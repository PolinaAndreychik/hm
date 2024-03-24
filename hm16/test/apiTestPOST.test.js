const axios = require('axios');
const {Validator} = require('jsonschema');
const getBooksJsonSchema = require('../testData/postBooks.v1.json')

const validator = new Validator();

describe('API tests POST', function () {
    let result;
    beforeAll(async () => {
        result = await axios.post('https://fakerestapi.azurewebsites.net/api/v1/Books', {
            "id": 0,
            "title": "string",
            "description": "string",
            "pageCount": 0,
            "excerpt": "string",
            "publishDate": "2024-03-24T16:13:07.441Z"
        }, {
            headers: {
                "accept": "*/*",
                "Content-Type": "application/json; v=1.0"
            }
        });
    })

    test('POST /api/v1/Books should be status 200', async () => {
        expect(result.status).toEqual(200)
    })

    test('POST /api/v1/Books should be valid jsonschema', async () => {
        const validationResult = await validator.validate(result.data, getBooksJsonSchema);
        expect(validationResult.valid).toEqual(true)
    })
})