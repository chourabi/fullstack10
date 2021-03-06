var http = require('http');


http.createServer(function(req,res){

    let body = [];
    let requestBody = {};

    req.on('data',(chunk)=>{
        body.push(chunk);
    }).on('end',()=>{

        var textJSON = Buffer.concat(body).toString();

        requestBody = JSON.parse(textJSON);

        console.log(requestBody);


        res.end();
    })

}).listen(3005);