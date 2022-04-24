// express fundamentals
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors()) //aita na dele duita port cros connection hoina
app.use(express.json()) // to make body's data parse in json

// backend code
app.get('/', (req, res)=>{
    res.send('ema john backend runnig')
})
app.listen(port, ()=>{
    console.log('successfuly code runnig', port);
})