const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
var bodyParser = require('body-parser').json();
var fs = require('fs');
var processing = require('./app/routes/process');

//git diff HEAD FETCH_HEAD
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.post('/notes', bodyParser, (req, res) => {
    res.send({
        'new': processing.inputFromFrontEnd(req.body)
    });
});

app.listen(port, () => {
    console.log('listening to port ' + port);
});