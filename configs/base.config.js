const path = require('path');

exports.config = {
    hostname: 'localhost',
    specs: [path.resolve('tests/*.*js')],
    logLevel: 'trace',
    framework: 'mocha',
    outputDir: __dirname,
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
};