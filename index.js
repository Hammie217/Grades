const express = require('express');
const mysql = require('mysql');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.listen(8080, () => {
    console.log('listening on 8080 snitch');
});

app.get('/', () => {

});

app.get('/grades', (req, res) => {
    res.render(__dirname + "/public/grades.ejs");
});

app.get('/db', (req, res) => {
    
    var con = mysql.createConnection({
        host: "localhost",
        user: "katie",
        password: "password"
      });

      var printDb = ((err) => {

      });
});