const router = require('express').Router();

router.get('/',(req,res)=>{
    res.render('index');
})

let VData = [];
router.post('/submit',(req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const msg = req.body.msg;
    if(name && email && msg){
        VData.push({name,email,msg});
        res.send('Form submitted successfully');
    }else{
        res.status(400).send('Please Fill all the fields')
    }
})

module.exports = router;