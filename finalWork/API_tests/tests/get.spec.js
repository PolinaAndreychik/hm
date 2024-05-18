const { test, expect } = require('@playwright/test');

test.describe('API tests GET on oz.by', async function () {
  let response;
  test.beforeEach(async ({ request }) => {
    response = await request.get('https://oz.by/goods/ajax/categoryGrid.php?id-goods-type=107', {
      headers: {
        'sec-ch-ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
        Accept: 'text/html, */*; q=0.01',
        'X-Requested-With': 'XMLHttpRequest',
        'sec-ch-ua-mobile': '?0',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'sec-ch-ua-platform': '"Windows"',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'sec-gpc': '1',
        host: 'oz.by',
      },
    });
  });
  test('GET id-goods-type=107 should be status `200` ', async () => {
    await expect(response.status()).toBe(200);
  });
});
