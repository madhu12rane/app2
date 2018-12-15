var express=require('express');
var ejs=require('ejs');
var app=express();
var routes=require('./routes/route.js');
app.use(express.static(__dirname+'/public'));
app.set('view engine','ejs');
app.get('/',routes.home);
  app.get('/:city',routes.city);var port= process.env.PORT || 8080;

app.listen(port,function(request,response){
 console.log("web app running at http://localhost:"+port);
});