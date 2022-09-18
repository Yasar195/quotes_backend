const client = require('./database.js');

const getIndex = async () => {
    const res = await client.query('SELECT COUNT(*) FROM quote;');
    const limit = res.rows[0].count;
    return limit
}

const getRandomQoutes = async () => {
    const limit = await getIndex()
    const index = Math.floor((Math.random() * limit) + 1);
    return new Promise((resolve, reject) => {
        const res = client.query(`SELECT quote.quote, author.first_name, author.last_name, image.location FROM quote INNER JOIN author ON quote.author_id = author.author_id INNER JOIN image ON author.img_id = image.img_id where quote_id = ${index};`)

        if(res !== null){
            resolve(res);
        }
        else{
            reject('database query failed');
        }
    })
}

getRandomQoutes()

module.exports.getRandomQoutes = getRandomQoutes;
module.exports.getIndex = getIndex;