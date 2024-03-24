const axios = require('axios');
const {Validator} = require('jsonschema');
const getBooks_idJsonSchema = require('../testData/getBooks_id.v1.json')

const validator = new Validator();

describe('API tests GET_id', function () {
    let result;
    beforeAll(async () => {
        result = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Books/3', {
            headers: {
                "accept": "text/plain; v=1.0"
            }
        });
    })

    test('GET_id /api/v1/Books should be status 200', async () => {
        expect(result.status).toEqual(200)
    })

    test('GET_id /api/v1/Books should be valid jsonschema', async () => {
        const validationResult = await validator.validate(result.data, getBooks_idJsonSchema);
        expect(validationResult.valid).toEqual(true)
    })
})