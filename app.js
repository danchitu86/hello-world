const express = require('express')
const app = express();

const port = process.env.port || 3000;
const bodyParser = require('body-parser');
const itemRouter = require('./item.js')
const bookRouter = require('./books.js')
const cors = require('cors')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.use('/api', itemRouter);
app.use('/api', bookRouter);

app.get('/', (req, res)=>{
    res.send('Welcome to my API')
});

app.listen(port, ()=>{
    console.log('Running on port ' + port);
});
