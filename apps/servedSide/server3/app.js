const express = require('express');
const { createAccount, signInWithUsernameAndPassword } = require('./app_modules/auth');
const app = express()
const port = 3008



app.use(function (req, res, next) {
    console.log('Time:', Date.now())

  
    const path = req.path

    if (path === '/auth/signup') {
        next();
    }else if (path === '/auth/signin') {
        next();
    }else{
        const auth = req.headers['authorization'];
        // check for the token in the database
        
        var MongoClient = require('mongodb').MongoClient;
        var url = 'mongodb://localhost:27017/';
        
        MongoClient.connect(url,function(err,db){
            if (err) throw err;
            var shopDB = db.db('shop');

            shopDB.collection('users').findOne({token:auth}).then((user)=>{
                if (user != null) {
                    next();
                }else{
                    res.send({success:false, message:"access denied."});
                }
            })
        })
    }


    
    
})



app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });




app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.post('/auth/signup', (req, res) => {
    createAccount(req,res);
})

app.post('/auth/signin', (req, res) => {
    signInWithUsernameAndPassword(req,res);
})

app.get('/auth/info', (req, res, next) => {
    const auth = req.headers['authorization'];
    // check for the token in the database
    
    var MongoClient = require('mongodb').MongoClient;
    var url = 'mongodb://localhost:27017/';
    
    MongoClient.connect(url,function(err,db){
        if (err) throw err;
        var shopDB = db.db('shop');

        shopDB.collection('users').findOne({token:auth}).then((user)=>{
            if (user != null) {
                
                const userToSend = {
                    username:user.username,
                    id:user._id,
                    pseudo:user.pseudo
                }

                res.send(userToSend);
                

            }else{
                res.send({success:false, message:"access denied."});
            }
        })
    })
})








app.listen(port, () => {
  console.log(`E commerce app is listening at http://localhost:${port}`)
})