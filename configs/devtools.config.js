const path = require('path')

exports.config = {
    ...require("./base.config").config,
    automationProtocol: 'devtools',
    capabilities: [
        {
            browserName: 'chrome'
        }
    ]
};