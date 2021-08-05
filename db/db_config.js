const { Pool } = require('pg')

// const pool = new Pool({
//     connectionString: process.env.DATABASE_URL,
//     ssl: {
//         rejectUnauthorized: false
//     }
// }); 
let pool
if(!process.env.NODE_ENV) {
    pool = new Pool({
        user: 'ncolby', 
        host: 'localhost',
        port: 5434,
        password: 'password',
        database: 'postgres'
    })
} else {
    pool = new Pool({
        connectionString: process.env.DATABASE_URL,
        host: 'https://obscure-temple-03891.herokuapp.com',
        ssl: {
            rejectUnauthorized: false
        }
    })
}



module.exports = pool