
var express = require('express');
var index = require('./routes/opquast');

var app = express();
            
app.set('view engine', 'ejs');
app.use(express.json());


app.use(express.urlencoded({ extended: false }));
// parse full object souvent pour put et create 
//A new body object containing the parsed data is populated on the 
//request object after the middleware (i.e. req.body). This object will 
//contain key-value pairs, where the value can be a string or array (when extended is false)
//FIXME What is Middleware


 app.use('/', index);

app.get("/",function(req,res){

    res.send("hello port");
});

app.listen(3111);


module.exports = app;



       
/* -------------------------------------------------------------------------- */
/*                                   //?? POUR view                           */
/* -------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------ */
//   TODO
             /*/When extended property is set to true, the URL-encoded data

               will be parsed with the qs library.

                     On the contrary,

             !!when extended property is set to false, the URL-encoded data 
                     will instead be parsed with the querystring library.

/* -------------------------------------------------------------------------- */



// HTTP request logger middleware for node.js 
// req is the  http request 


// FIXME require index car il en a besoin pour le traitement de formulaire 
// const { get } = require('http');