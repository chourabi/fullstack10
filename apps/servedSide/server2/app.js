const { ObjectId } = require('bson')
const express = require('express')
const app = express()
const port = 3008


app.use(function (req, res, next) {
    console.log('Time:', Date.now())

    console.log(req.headers);

    const auth = req.headers['authorization'];
    


    const isConnected = true;

    if ( ! isConnected) {
         res.writeHead(403,{'content-type':'application/json'});
         res.end(JSON.stringify({success:false, message:'access denied, you need to sign in first.'}));
    } else {
       /*setTimeout(()=>{
        next();
       },4000)*/

       next();
    }
   

    
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.get('/produits', (req,res , next) => {
    var produits = [
        { title:"produit", price:5000 },
        { title:"produit", price:5000 },
        { title:"produit", price:5000 },
        { title:"produit", price:5000 },
        
    ];
  res.send(produits);
})


app.post('/produits/add', (req,res, next)=>{

    var body = [];
    var requestBody = {};

    req.on('data',(buff)=>{
        body.push(buff);
    }).on('end',()=>{

        requestBody = JSON.parse(Buffer.concat(body).toString());
        // insert database

        // let the user know that the product is inserted
        res.send(requestBody);
    
    })

})


app.get('/test',(req,res)=>{


    /** SELECT SQL //  MONGO DB find  **/

    var MongoClient = require('mongodb').MongoClient;
    var url = 'mongodb://localhost:27017/';
    
    MongoClient.connect(url,function(err,db){
        if (err) throw err;
        var ecomm = db.db('ecomm');

        /**  READ  **/
        // find take a {} => query ==
        // {ville:'tunis', price:5000}
        // find = total des documents,  
        // findOne = first accu document
        // sort ,  find().sort({ key: ( -1 ASC 1 DESC) })
        // sort takes {} , if first keys are the same, changes to the sec key
        // limit(number) limit the documents number to display
        // we can do the combination that we wish for

        /*ecomm.collection('produits').find({}).sort().limit(5).toArray(function(err,result){
            if(err) throw err;

            var produits = [];

            result.map((p)=>{
                produits.push({
                    p_title:p.title,
                    p_price:p.price,
                    p_ville:p.ville
                })
            })

            res.send(produits);*/



            /** INSERT **/

            /*const produit = {
                title:"MACBOOK AIR PRO 1",
                price:12000,
                ville:"tunis"
            }
            const produit2 = {
                title:"MACBOOK AIR PRO 2",
                price:12000,
                ville:"tunis"
            }

            const produit3 = {
                title:"MACBOOK AIR PRO 3",
                price:12000,
                ville:"tunis"
            }

            // insert one
            /*ecomm.collection('produits').insertOne(produit,function(err,reslocal){
                if(err) throw err;
                console.log("inserted !");
                res.send();
            
            })*/
            /*var products = [
                produit,
                produit2,
                produit3
                
            ]
            ecomm.collection('produits').insertMany(products,function(err,reslocal){
                if(err) throw err;
                console.log("inserted !");
                res.send();
            
            })*/



            /** UPDATE **/

            /*var query ={ ville:'tunis 2' };
            var newvalues = { $set : { ville:'tunis 3' } }
            // update One Many
            ecomm.collection('produits').updateMany(
                query,
                newvalues,
                function(err,response){
                    if(err) throw err;
                    console.log("updated !");
                    console.log(response);
                    res.send();
                }
            )*/


            /** DELETE **/

            /*var query = { title:"ALCATEL" }
            ecomm.collection('produits').deleteMany(
                query,
                function(err,response){
                    if(err) throw err;
                    console.log("deleted !");
                    console.log(response);
                    res.send();
                })*/

                var query = { _id:ObjectId("6044ba075a3ba55ee437f675") }
                ecomm.collection('produits').deleteOne(
                query,
                function(err,response){
                    if(err) throw err;
                    console.log("deleted !");
                    console.log(response);
                    res.send();
                })

                
            

    })




    
})






app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})