const express = require('express');
const { createAccount, signInWithUsernameAndPassword } = require('./app_modules/auth');
const app = express()
const port = 3008
var fs  = require('fs');
var formidable = require('formidable');


app.use(express.static('public'))

app.use(function (req, res, next) {
    console.log('Time:', Date.now())

  
    const path = req.path

    if (path === '/auth/signup') {
        next();
    }else if( path === '/app/products' ){
        next();
    }
    else if( path === '/app/products/add' ){
        next();
    }
    
    else if (path === '/auth/signin') {
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




app.get('/app/products', (req, res, next) => {
    const auth = req.headers['authorization'];
    // check for the token in the database
    
    var MongoClient = require('mongodb').MongoClient;
    var url = 'mongodb://localhost:27017/';
    
    MongoClient.connect(url,function(err,db){
        if (err) throw err;
        var shopDB = db.db('shop');

        shopDB.collection('products').find({}).toArray().then((result)=>{
            res.send({success:true, products:result});
        }).catch((err)=>{
            res.send({success:false, message:"Something went wrong."});
        })
        
    })
})


app.post('/app/products/add', (req, res, next) => {

    var form = new formidable.IncomingForm();
       form.parse(req,function(err,fields,files){

        console.log(files,fields);

        const photoName =new Date().getTime()+"-"+files.photo.name;
        var oldpath = files.photo.path;
        var newpath = 'C:/Users/tchou/Documents/fullstack10/apps/servedSide/server3/public/'+photoName

        fs.rename(oldpath,newpath,function(err){
            

            var MongoClient = require('mongodb').MongoClient;
    var url = 'mongodb://localhost:27017/';
    
            MongoClient.connect(url,function(err,db){
                if (err) throw err;
                var shopDB = db.db('shop');

                shopDB.collection('products').insertOne({
                    title:fields.title,
                    category:fields.category,
                    price:fields.price,
                    photo:"http://localhost:3008/"+photoName
                },function(err){
                    res.send("inserted 1 product !")
                })
                
            })
            
        })

    } )
    
})







app.listen(port, () => {
  console.log(`E commerce app is listening at http://localhost:${port}`)
})