const client = require('./database.js');
const fs = require('fs');

const base64_encode = (file) => {
    const bitmap = fs.readFileSync(file);
    return new Buffer.from(bitmap).toString('base64');
}

const getRandomQoutes = async (index) => {
    const res = await client.query(`SELECT quote.quote, author.first_name, author.last_name, image.location FROM quote INNER JOIN author ON quote.author_id = author.author_id INNER JOIN image ON author.img_id = image.img_id where quote_id = ${index};`)
    let base64 = "data:image/webp;base64,"
    base64 = base64.concat(base64_encode(res.rows[0].location));
    delete res.rows[0].location;
    res.rows[0].image = base64;
    return res.rows[0];
}


module.exports.getRandomQoutes = getRandomQoutes;