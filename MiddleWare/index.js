const express = require("express");
const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON bodies

//middleware - logging, auth,  validation

const loggingMiddleware = (req, res, next) => {
    console.log('login');
    next();
}

const authMiddleware = (req, res, next) => {
    console.log('auth');
    next();
}

app.get('/', (req, res) => {
    console.log(req.body);    
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
