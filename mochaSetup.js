const { JSDOM } = require('jsdom');
const Pug = require('pug');
const fs = require('fs');

const dom = new JSDOM('<!DOCTYPE html><html><body><div id="app"></div></body></html>', {
    url: 'http://localhost:3000'
  });

global.window = dom.window
global.document = dom.window.document
global.DocumentFragment = dom.window.DocumentFragment
require.extensions['.pug'] = function (module, filename) {
    const contents = fs.readFileSync(filename, 'utf-8');
  
    module.exports = Pug.compile(contents);
  }
  require.extensions['.scss'] = function () {
    module.exports = () => ({});
  }
