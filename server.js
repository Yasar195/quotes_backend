const express = require('express');
const query = require('./query.js');
const cors = require('cors');
const getRandomQoutes = query.getRandomQoutes;
const getIndex = query.getIndex;
const app = express()
const port = process.env.PORT || 3000
const fs = require('fs')

app.use(cors());

const base64_encode = (file) => {
    const bitmap = fs.readFileSync(file);
    return new Buffer.from(bitmap).toString('base64');
}

app.get('/', async (request, response)=> {
    getRandomQoutes()
    .catch((msg)=> {
        console.log('i ran')
        response.send({"message": msg})
    }).then((res)=> {
        let base64 = "data:image/webp;base64,"
        base64 = base64.concat(base64_encode(res.rows[0].location));
        delete res.rows[0].location;
        res.rows[0].image = base64;
        response.send(res.rows[0]);
    })
})

app.listen(port);