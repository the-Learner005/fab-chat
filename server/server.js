//This is root to my chat application
const path = require('path');
const express = require('express');
const app = express();
var helloURL = '/';

const publicPath = path.join(__dirname, '../public');

const port = process.env.PORT || 3000;

app.use(express.static(publicPath));


app.listen(port,function(){
    console.log('Server is On port '+ port);
});
