var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function(req,res){

   if (req.url == '/upload') {
       // upload 
       var form = new formidable.IncomingForm();
       form.parse(req,function(err,fields,files){

        console.log(files);

        var oldpath = files.avatar.path;
        var newpath = 'C:/Users/tchou/Documents/fullstack10/apps/servedSide/server1/files/'+files.avatar.name

        fs.rename(oldpath,newpath,function(err){
            console.log("uploaded");
            res.end();
        } )


      


       })


   }else{
    res.writeHead(200,{ 'content-type':"text/html" });
    res.write('<form enctype="multipart/form-data"  action="upload" method="post" >');
    res.write('<input type="file" name="avatar" />');
    res.write('<input type="submit" value="send" />');
    res.write('</form>');

    res.end();
    
   }
    
    



}).listen(3005);