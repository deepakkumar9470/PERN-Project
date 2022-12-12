// const {Pool} = require('pg');

// const pool = new Pool({
//     user :"postgres",
//     password : "pg@2023",
//     host : "localhost",
//     port : 5432,
//     database : "postgres"
// })

// module.exports = pool

const {Client} = require('pg')


const client = new Client({
    user :process.env.USER,
    password : process.env.PASSWORD,
    host : process.env.HOST,
    port : process.env.PG_PORT,
    database : process.env.DATABASE
})

client.connect()

module.exports = client
