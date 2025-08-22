const { name } = require('ejs');
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cookieParser());

const adminRouter = express.Router();


const loggerWrapper = (options) => {
    return function (req, res, next) {
        if(options.log) {
              console.log(`${new Date(Date.now()).toLocaleString()} - ${req.method} - ${req.originalUrl} - ${req.protocol} - ${req.ip}`);
              next();
        } else {
            throw new Error('Logging is disabled');
        }
    } 
}


adminRouter.use(loggerWrapper({log: true}));


app.use('/about', adminRouter);

app.get('/about', (req, res) => {
    res.send('about page');
});


const errorMiddleware = (err, req, res, next) => {
    console.log(err);
    res.status(500).send('There was a server side error!')   
}

adminRouter.use(errorMiddleware);

app.listen(3000, () => {
    console.log('listening on port 3000');
})