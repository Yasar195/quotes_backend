const { Client } = require('pg');

let client

try{
    const connectionString = 'postgres://yasar:Tt0ADoZwaJa7zoPTShB7FQW0a8IZAApJ@dpg-cces9r9a6gdgjihdh4qg-a.singapore-postgres.render.com/quotes_1295?ssl=true'
    let p = new Promise((resolve, reject)=> {
        client = new Client({
            connectionString: connectionString
        })

        if(client !== ""){
            resolve(client);
        }
        else{
            reject('Connection failed');
        }
    })

    p.then((client)=> {
        client.connect();
    }).catch((message)=> {
        console.error(message);
    })
}
catch(error){
    console.error(error);
}

module.exports = client;