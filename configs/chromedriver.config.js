const path = require('path')

exports.config = {
    ...require("./base.config").config,
    port: 4444,
    path: '/',
    services: ['chromedriver'],
    chromeDriverArgs: ['--port=4444'], // default for ChromeDriver
    capabilities: [
        {
            browserName: 'chrome'
        }
    ]
};