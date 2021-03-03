var express = require('express');
var app = express();


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://eumanuel:emanuel10@geonosis.mongodb.umbler.com:49488/?authSource=nodejs";

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("nodejs");
        var query = { nome: "Emanuel" };
        dbo.collection("teste").find(query).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          var resultado = result;
          db.close();
          res.send(resultado)
        });
      });
})

var port = 3000;
app.listen(port);
console.log('Umbler - Express server started on post %s', port);


