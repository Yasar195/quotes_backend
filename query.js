const client = require('./database.js');

const getRandomQoutes = (index) => {
    let res
    return new Promise((resolve, reject) => {
        res = client.query(`SELECT quote.quote, author.first_name, author.last_name, image.location FROM quote INNER JOIN author ON quote.author_id = author.author_id INNER JOIN image ON author.img_id = image.img_id where quote_id = ${index};`)

        if(res !== null){
            resolve(res);
        }
        else{
            reject('database query failed');
        }
    })
}


module.exports.getRandomQoutes = getRandomQoutes;