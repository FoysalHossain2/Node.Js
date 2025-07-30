// dependencies 
const http = require('http');
// const url = require('url'); 
// const {StringDecoder} = require('string_decoder');
// const { buffer } = require('stream/consumers');
const handleReqRes = require('./helpers/handleReqRes');
const environment = require('./helpers/environment');

//app object - module scaffolding 
const app = {};

// configuration
app.config = {
    port: 3000
}; 

// handleReqRes function
app.handleReqRes = handleReqRes;



// create server 
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environment.port, () => {
        console.log(`listen to port ${environment.port}`);
    });
};

app.createServer();
