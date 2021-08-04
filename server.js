require('dotenv').config()



const express = require('express');
const app = express();
const db = require('./db/db_config')


app.use(express.static('public'))

app.get('/api', (req, res) => {
        db.query('SELECT * FROM todo', (err, data) => {
        // console.log('this is my data', data)
        res.json(data.rows);
    })
})

const PORT = process.env.PORT || 5000;



app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})