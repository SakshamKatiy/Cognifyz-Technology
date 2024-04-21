const router = require('express').Router();

// path
router.get('/',(req,res)=>{
    res.render("index")
})

router.post('/submit',(req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    res.send(`Name: ${name} and Email: ${email}`);
})

module.exports = router;