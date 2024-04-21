const express = require('express');
const app = express();
const port = 8000;

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');
const router  = require('./model/index')

app.use('/', router);

app.listen(port,()=>{
    console.log(`server listen on port http://localhost:${port}`)
})
