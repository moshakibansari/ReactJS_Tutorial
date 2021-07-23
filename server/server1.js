const express = require("express");
const mongodb = require("mongodb");
const cors = require("cors");
const bodyparser = require("body-parser");


const app = express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
 const ashokIT =  mongodb.MongoClient;
 app.post("/login",(req,res)=>{
     ashokIT.connect("mongodb+srv://shakib:shakib@cluster0.urpmf.mongodb.net/R08?retryWrites=true&w=majority",{useUnifiedTopology: true,useUnifiedTopology :true},
     (err,connection)=>{
         if (err)throw err;
         else{
             const db = connection.db("R08");
             db.collection("login_details").find({"username":req.body.username,"password":req.body.password}).toArray((err,array)=>{
                 if(err)throw err;
                 else{
                     if(array.length>0){
                         res.send({"login":"success"});
                     }else{
                         res.send({"login":"fail"});
                     }
                 }
             });
         }
     
       })
    });

    app.listen(8080,()=>{
        console.log("server listing the port number");
    });
