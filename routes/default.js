const express=require('express')
const router=express.Router();
router.get('/', (req,res)=>{
    a="this is a dafult page ";
    // console.log(req.body)
    // res.send(req.body)
    // console.log(req.body)
    // res.json(req.body? req.body :a)
    res.send({"app-use par request":"default page me ","no issue in app .use ":"only json formate allow "})
})
module.exports=router