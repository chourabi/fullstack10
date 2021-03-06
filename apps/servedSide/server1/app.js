var http = require('http');
var url = require('url');
var fs = require('fs');

var dateModule = require('./modules/myDate');
const port = 3005;

http.createServer( function(req,res) {

    console.log(req.url);

    var q = url.parse(req.url,true);

    const path = q.pathname;


    switch (path) {
        case '/summer':
            fs.readFile('./fakeDB/db.txt',function(err,data){
                if (err) {
                    throw err;
                }
                res.writeHead(200,{'content-type':'text/html'});
                

                var blocHTML = '<ul>';

                var category = data.toString().split(';');
                
                category.map((c)=>{
                    blocHTML+=' <li>'+c+'</li>';
                })

                blocHTML+='</ul>';

                
                
                res.write(blocHTML);
                res.end();


            })


            
        break;
        case '/winter':
        
            /* delete file 
            fs.unlink('./template/test.html',function(err){
                console.log("deleted successfully");
            })
            */

            /** create file if not exist ! with content  */
            /*fs.writeFile('./test.txt','helloworld2','utf8',function(err){
                console.log("ok !");

                res.end();
            });*/

            /* update file 
            fs.appendFile('./test.txt','\nsecond line',function(err){
                console.log("updated !");
                res.end();
            })*/


            /** exist test */

            fs.stat('./testx.txt',function(err,stat){
                console.log(stat);
                
                if (stat != null) {
                    // exist 
                }
                
            });

            



        break;
        default:
            res.end("hello welcome page");
        break;
    }


    
    
}).listen(port);

