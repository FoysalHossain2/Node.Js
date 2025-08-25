const express = require('express');

const adminRouter = express.Router();

adminRouter.get('/', (req, res) => {
    res.send('Admin Home Page');
});

adminRouter.get('/users', (req, res) => {
    res.send('Admin Users Page');
});

module.exports = adminRouter;

