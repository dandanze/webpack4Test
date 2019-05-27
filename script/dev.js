const express = require('express');
const app = express()

 
const webpackconfig = require('./webpack.dev.js');
webpackconfig(app)

// app.use(express.static('./dist'));
// app.get('/', function(req, res, next){
//     next();
// })
 
app.listen(8999, function(e){
    console.log(`server start at 8999`);
});
