const express = require('express');
const app = express();
const port = 8080 || process.env.port
var bodyParser = require('body-parser');
var fs = require('fs');
var processing = require('./app/routes/process');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/notes', (req, res) => {
    res.sendfile(__dirname + '/app/routes/index.html');
});





app.post('/notes', (req, res) => {
    console.log(JSON.stringify(req.body.jsonArr[0].jsonData));
    var dataToPass = { "new": req.body.jsonArr[0].jsonData }
    console.log(dataToPass);

    fs.writeFile("test.txt", processing.inputFromFrontEnd(dataToPass), function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });

});

app.listen(port, () => {
    console.log('listening to port ' + port);
});