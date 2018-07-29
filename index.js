const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.listen(8080, (req, res) => {
    console.log('listening on 8080 bitch');
});

app.get('/', (req,res) => {
    res.render(__dirname + "/public/index.ejs");
});