var express = require('express');
var app = express();
var https = require('https');
var superagent = require('superagent');

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'jade');

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/data', function(req, res){

  superagent.get("https://api.do-it.org/v1/opportunities\?lat\=51.567526\&lng\=-0.182308\&miles\=2")
    .set({  Accept: 'application/json' })
    .end(function(e, doitResponse){
      if (e) next(e);
      orgainsations = doitResponse.body.data.items;
      return res.send({data: orgainsations});
    })

});


app.listen(process.env.PORT || 3000, function() {
  console.log("listening on 3000");
});

