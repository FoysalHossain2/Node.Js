/*
Title: Uptime  Monitoring Application
Description: A Restful API to monitor up or down time of defined links 
Author: Foysal Hossain
Date: 08/1/2023
*/

// Dependencies
const  http = require('http');
const url = require('url');
const {handleReqRes}  = require('./helpers/handleReqRes');
const environment = require('./helpers/environments')
const data = require('./lib/data');

//app object - module scaffolding
const app = {};

// data.create('test', 'newFile',{'name': 'bangladesh', language: 'bangle'}, (err) => {
//     console.log(`error was`, err);
    
// } )

//configuration 
app.config = {
    port: 3000
};

//create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environment.port, () => {
        // console.log(`environment variable is ${process.env.NODE_ENV}`);
        console.log(`server is listening on port ${environment.port}`);
    });
};

//handle Request Responsive
app.handleReqRes = handleReqRes;

//start the server
app.createServer();