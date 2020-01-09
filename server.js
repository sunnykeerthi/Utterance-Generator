const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
var bodyParser = require('body-parser').json();
var fs = require('fs');
var processing = require('./app/routes/process');

//git diff HEAD FETCH_HEAD

app.post('/notes', bodyParser, (req, res) => {
    res.send({
        'new': processing.inputFromFrontEnd(req.body)
    });
});

app.listen(port, () => {
    console.log('listening to port ' + port);
});