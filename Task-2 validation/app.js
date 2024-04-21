const express = require('express');
const app = express();
const router = require('./model/index');
const port = 3000;
app.use(express.urlencoded({extended:true}));
// app.set()
app.set('view engine','ejs');
app.use('/',router);

app.listen(port,()=>{
    console.log(`server listen on port http://localhost:${port}`);
})