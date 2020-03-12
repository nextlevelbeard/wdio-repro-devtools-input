exports.config = {
    ...require("./base.config").config,
    services: ['selenium-standalone'],
    port: 4444,
    path: '/wd/hub',
    capabilities: [
        {
            browserName: 'chrome'
        }
    ]
};