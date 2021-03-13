const TokenGenerator = require('uuid-token-generator');


exports.createAccount = function(req,res){
      
    const headers = req.headers;

    if (headers['content-type'] == 'application/json') {
        
        var body = [];
        var requestBody = {};

        req.on('data',(chunck)=>{
            body.push(chunck);
        }).on('end',()=>{
            requestBody = JSON.parse(Buffer.concat(body).toString());

            console.log(requestBody);

            // mongodb

            var MongoClient = require('mongodb').MongoClient;
            var url = 'mongodb://localhost:27017/';
            
            MongoClient.connect(url,function(err,db){
                if (err) throw err;
                var shopDB = db.db('shop');
                const username = requestBody.username.toLowerCase();
                const password = requestBody.password;
                const pseudo = requestBody.pseudo;
                
                

                shopDB.collection('users').findOne({ username: username }).then((result)=>{
                    console.log(result);

                    if (result == null) {
                        // add user
                        shopDB.collection('users').insertOne(
                            { username: username, pseudo: pseudo, password: password }
                        ).then((result)=>{
                            res.send({ success:true, message:"Account created !"});
                        }).catch((err)=>{
                            res.send({ success:false, message:"Oups !"});
                        })


                    }else{
                        res.send({ success:false, message:"Username is already in use."});
                    }

                    
                }).catch((err)=>{
                    res.send({ success:false, message:"Oups !"});
                })


                
            });

            

        })


    }else{
        res.send({ success:false, message:"bad request" });
    }
    



}


exports.signInWithUsernameAndPassword = function(req,res){

        
    const headers = req.headers;

    if (headers['content-type'] == 'application/json') {
        
        var body = [];
        var requestBody = {};

        req.on('data',(chunck)=>{
            body.push(chunck);
        }).on('end',()=>{
            requestBody = JSON.parse(Buffer.concat(body).toString());

            console.log(requestBody);

            // mongodb

            var MongoClient = require('mongodb').MongoClient;
            var url = 'mongodb://localhost:27017/';
            
            MongoClient.connect(url,function(err,db){
                if (err) throw err;
                var shopDB = db.db('shop');
                const username = requestBody.username.toLowerCase();
                const password = requestBody.password;
                

                shopDB.collection('users').findOne({ username: username, password:password }).then((result)=>{
                    console.log(result);

                    if (result == null) {
                        
                        res.send({ success:false, message:"Wrong username or password."});


                    }else{
                        
                        // generate a new token
                        const tokgen2 = new TokenGenerator(256, TokenGenerator.BASE62);
                        const token = tokgen2.generate();


                        // update user , new token
                        var query ={ username:username };
                        
                        var newvalues = { $set : { token:token, lastRequestTokenDate: new Date().getTime() } }
                        shopDB.collection('users').updateOne(query,newvalues).then((resultUpdate)=>{
                            res.send({ success:true, token:token});
                        }).catch((err)=>{
                            res.send({ success:false, message:"Oups !"});
                        })
                        
                    }

                    
                }).catch((err)=>{
                    res.send({ success:false, message:"Oups !"});
                })


                
            });

            

        })


    }else{
        res.send({ success:false, message:"bad request" });
    }
    
}