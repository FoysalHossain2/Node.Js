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

//app object - module scaffolding
const app = {};

//configuration 
app.config = {
    port: 3000
};

//create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port), () => {
        console.log(`Server is listening on port ${app.config.port}`);
    }
};

//handle Request Responsive
app.handleReqRes = handleReqRes;

//start the server
app.createServer();