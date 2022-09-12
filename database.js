const { Client } = require('pg');

let client

try{
    const connectionString = 'postgres://yasar:Tt0ADoZwaJa7zoPTShB7FQW0a8IZAApJ@dpg-cces9r9a6gdgjihdh4qg-a.singapore-postgres.render.com/quotes_1295?ssl=true'
    client = new Client({
        connectionString: connectionString
    })
    client.connect()
}
catch(error){
    console.error(error);
}

module.exports = client;