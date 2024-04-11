const express=require('express')
const router=express.Router();
router.get('/', (req,res)=>{
    a="this is a dafult page ";
    // console.log(req.body)
    // res.send(req.body)
    // console.log(req.body)
    // res.json(req.body? req.body :a)
    res.json({"app-use par request":"default page me "})
})
module.exports=router