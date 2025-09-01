const express = require('express');
const { default: next } = require('next');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

//404 error handler
app.use((req, res, next) => {
    res.status(404).send('Request Not Found!');
})

app.use((err, req, res, next) => {
    if (err) {
        res.status(500).send(err.message);
    } else {
        res.status(404).send('Not Found');
    }
});


app.listen(3000, () => {
    console.log("app listening at port 3000");
})