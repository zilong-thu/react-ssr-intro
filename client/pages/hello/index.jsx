// CommonJS modules
const React          = require('react');
const ReactDOMServer = require('react-dom/server');

const str = ReactDOMServer.renderToString(<div>Hello World!</div>);
console.log(str);
console.log(typeof str);
