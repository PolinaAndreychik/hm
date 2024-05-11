const axios = require('axios');
const {Validator} = require('jsonschema');
const getBooksJsonSchema = require('../testData/getBooks.v1.json')

const validator = new Validator();

describe('API tests GET', function () {
    let result;
    beforeAll(async () => {
        result = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Books', {
            headers: {
                "accept": "text/plain; v=1.0"
            }
        });
    })
    test('GET /api/v1/Books should be status 200', async () => {
        expect(result.status).toEqual(200)
    })

    test('GET /api/v1/Books should be valid jsonschema', async () => {
        const validationResult = await validator.validate(result.data, getBooksJsonSchema);
        expect(validationResult.valid).toEqual(true)
    })
})