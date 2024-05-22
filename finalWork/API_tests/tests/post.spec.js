const { test, expect } = require('@playwright/test');
const postOzJsonSchema = require('../testData/postOz.json');
const Ajv = require('ajv');
const ajv = new Ajv();

test.describe('API tests POST on oz.by', async function () {
  let response;
  const validate = ajv.compile(postOzJsonSchema);
  test.beforeEach(async ({ request }) => {
    response = await request.post('https://oz.by/checkout/delivery_methods.php?validate', {
      data: {
        'fullname': 'Андрейчик Полина Васильевна',
        'hpid': '1f2b8e18b4aa842951ca126b6ccfec5a_b3a2a8190b986dcbeb8914ac003bbb51',
        'id_delivery': '26',
        'id_payment': '',
        'maxAllowedBonusAmountWriteOff': '0',
        'payFromCashbackAccount': '0',
        'phone': '375339029970',
        'promo-code': '',
        'quantity[101285937]': '1',
        'sale[101285937]': '20839',
      },
      headers: {
        'sec-ch-ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
        'Accept': '[{"key":"Accept","value":"application/json, text/javascript, */*; q=0.01"}]',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'X-Requested-With': 'XMLHttpRequest',
        'sec-ch-ua-mobile': '?0',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'sec-ch-ua-platform': '"Windows"',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'sec-gpc': '1',
        'host': 'oz.by',
      },
    });
  });
  test('POST delivery_methods.php?validate should have valid jsonschema ', async () => {
    const data = await response.json();
    const valid = validate(data);
    expect(valid).toBe(true);
  });
  test('POST delivery_methods.php?validate status should be `200` ', async () => {
    await expect(response.status()).toBe(200);
  });
});
