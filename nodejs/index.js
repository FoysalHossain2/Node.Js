// dependencies 
const http = require('http');
const url = require('url'); 
const {StringDecoder} = require('string_decoder');
const { buffer } = require('stream/consumers');
const handleReqRes = require('./helpers/handleReqRes');

//app object - module scaffolding 
const app = {};

// configuration
app.config = {
    port: 3000
}; 

// ✅ handle Request Response - এটা আগে রাখতে হবে
app.handleReqRes = (req, res) => {
    const parseUrl = url.parse(req.url, true);
    const path = parseUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parseUrl.query;
    const headerObject = req.headers;

    const decoder = new StringDecoder('utf-8');
    let realData = '';

    req.on('data', (buffer)=> {
        realData += decoder.write(buffer);
    });

    req.on('end', () => {
        realData += decoder.end();
        console.log(realData);
        res.end('Hello programmer');
    });

    console.log(headerObject);
}

// ✅ তারপর server তৈরি
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`listen to port ${app.config.port}`);
    });
};

app.createServer();
