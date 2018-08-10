var express=require('express');
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
var cors=require('cors');
var routes=require('./routes/appRoutes');
var port=process.env.PORT || 8080;

var app=express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/',routes);

mongoose.connect('mongodb://localhost:27017/PhoenixDb');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.listen(port);

console.log("server is running at "+port);
