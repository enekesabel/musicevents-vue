const jsdom = require("jsdom");
const {JSDOM} = jsdom;
const {window} = new JSDOM(`...`);
global['window'] = window;
global['document'] = window.document;
global.navigator = {
    userAgent: 'node.js'
};

require('ts-babel-node').register({}, {
    "presets": [
        "env",
        "stage-2"
    ],
});

// async support
require('babel-polyfill');
