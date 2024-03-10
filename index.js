const express = require('express')
const cors =require('cors')
const { MongoClient } = require('mongodb')
const bcrypt =require('bcrypt')


const app = new express();
app.use(express.json());


app.use(cors());

const client =new MongoClient('mongodb+srv://admin1:admin1@cluster0.uib2fxp.mongodb.net/?retryWrites=true&w=majority')
client.connect();




const db = client.db("skill")
const col =db.collection("user")




app.get('/home',(req,res) => {
    res.send("Itis a Home Page");
})



app.post('/insert', async (req,res) => {


    req.body.password = await bcrypt.hash(req.body.password, 5)
    console.log(req.body);
    col.insertOne(req.body);
    res.send("Data Recived")
})

app.post('/check', async (req,res) => {
    console.log(req.body)


    var result = await col.findOne({"name":req.body.un})
    if(result != null) {
        if(await bcrypt.compare (req.body.pw, result.password)) {
            res.send(result);
        }
        else {
            res.send("fail")
        }
    }
    else {
        res.send("fail")
    }
})
app.listen(8081);
console.log("server Running");