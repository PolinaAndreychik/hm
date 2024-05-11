const BaseElements = require('../helpers/baseElements')

class Base extends BaseElements{
    async navigate(url) {
        await browser.url(url)
    }
}

module.exports = Base;