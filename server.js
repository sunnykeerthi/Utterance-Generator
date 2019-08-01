const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
var bodyParser = require('body-parser').json();
var fs = require('fs');
var processing = require('./app/routes/process');



app.post('/notes', bodyParser, (req, res) => {
    console.log(req.body);
    /*fs.writeFile("test.txt", processing.inputFromFrontEnd(req.body), function (data, err) {
        if (err) {
            return console.log(err);
        }
        console.log(data)
        res.send(data);
    })*/
    res.send(processing.inputFromFrontEnd(req.body));
});

app.listen(port, () => {
    console.log('listening to port ' + port);
});