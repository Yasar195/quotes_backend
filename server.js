const express = require('express');
const query = require('./query.js');
const cors = require('cors');
const getRandomQoutes = query.getRandomQoutes;
const app = express()
const port = process.env.PORT || 3000

app.use(cors());

app.get('/', async (req, res)=> {
    const index = Math.floor((Math.random() * 16) + 1);
    const data = await getRandomQoutes(index);
    res.send(data);
})

app.listen(port);