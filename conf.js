exports.config = {
    framework: 'jasmine',
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    specs: ['TestSpecification.js'],
    capabilities: {
        browserName: 'chrome'
    },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
}