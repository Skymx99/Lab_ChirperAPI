const mysql = require('mysql');

let connection = mysql.createConnection(
    {
        host: 'localhost',
        database: 'chirpr',
        user: 'Skymx99',
        password: 'Guitar15'
    }
);

connection.connect();

connection.query(`CALL getChirps(${chirps})`, (err, results, fields) => {
    if(err) {
        connection.end();
        return console.log(err);
    }
    console.log(results);
    connection.end();
});