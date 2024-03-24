const axios = require('axios');
const getBooksJsonSchema = require("../testData/getBooks.v1.json");

describe('API tests DELETE', function () {
    let result;
    beforeAll(async () => {
        result = await axios.delete('https://fakerestapi.azurewebsites.net/api/v1/Authors/54', {
            headers: {
                "accept": "*/*"
            }
        });
    })
    test('DELETE /api/v1/Books should be status 200', async () => {
        expect(result.status).toEqual(200)
    })
})