// express fundamentals
const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, Collection } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();

// pass 2GS9KLPwbkoCIYht
// user ema_johnDB

// middleware
app.use(cors()) //aita na dele duita port cros connection hoina
app.use(express.json()) // to make body's data parse in json




const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.pfbxg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try{
        await client.connect();
        const productCollection = client.db('emaJohn').collection('product')

        // get product or load products
        app.get('/product', async(req, res)=>{
            const query = {};
            const cursor = productCollection.find(query)
            const result = await cursor.toArray();
            res.send(result)
        })

        // count product items
        app.get('/productcount', async(req, res)=>{
            const query = {};
            const cursor = productCollection.find(query)
            const count = await cursor.count()
            res.send({count})
        })



    }finally{

    }
}
run().catch(console.dir)



// backend code
app.get('/', (req, res)=>{
    res.send('ema john backend runnig')
})
app.listen(port, ()=>{
    console.log('successfuly code runnig', port);
})