const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
var bodyParser = require('body-parser').json();
var fs = require('fs');
var processing = require('./app/routes/process');
var cors = require('cors');
//git diff HEAD FETCH_HEAD
app.use(cors());
app.post('/notes', bodyParser, (req, res) => {
    console.log('JSON.stringify(req.body)');
    console.log(JSON.stringify(req.body));
    res.send({
        'new': processing.inputFromFrontEnd(req.body)
    });
});

app.listen(port, () => {
    console.log('listening to port ' + port);
});