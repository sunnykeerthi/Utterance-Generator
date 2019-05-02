var newTest = require('./index');
var dataToPass = { "new": "(I have|I face|facing|having) (an) (issue|problem) (with) (my projector.|projector.) The projector is overheating. (Can you|could you|) (please help|help) (me) (troubleshoot|fix) (the|) (problem?|issue?)" }
var fs = require('fs');

fs.writeFile("test.txt", newTest.inputFromFrontEnd(dataToPass), function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});


