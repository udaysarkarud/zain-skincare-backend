const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
require('dotenv').config();
const app = express();
const ObjectId = require('mongodb').ObjectId
const port = process.env.PORT || 5000;


//midelware
app.use(cors());
app.use(express.json());


const root = async () => {
    try {

    }
    finally {

    }
}
root().catch(console.dir)

app.get('/', (req, res) => {
    res.send('Jerins Parlour Backend Runing')
})

app.listen(port, () => {
    console.log(`listening at Port:${port}`)
})