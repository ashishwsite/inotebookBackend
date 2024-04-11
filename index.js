const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors') 
connectToMongo();
const app = express()
const port =process.env.PORT|| 5000
const path = require("path");
const corsconfig={
  origin:"*",
  Credential:true,
  methods:["GET","POST","PUT","DELETE"],
}
app.options("",cors(corsconfig));
app.use(cors(corsconfig))
app.use(express.json())
// // first url which to check the server by defalut this requst  through this url is 
app.get('/',(req,res)=>{
  res.json ("hello return  res.json ramshish it is generated on get reqest of URl(loacalhost:5000/) ")
})
app.get('/info', (req,res)=>{
   return res.send ({"this is on on /infor url and send using return res,send()":true});
})
app.get('/way',(req,res)=>{
  res.send({"res.send":"true","res.json":"true","return res.json":"true"})
})
app.use('/api',require('./routes/default'))
// Available Routes ksi aur folder se rout ko lekar hit kar rah hua
// app.use(route,location) //to hit rote from other file
// app.use('/api/auth', require('./routes/auth'))// require(location of file where route is presnt)
// app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`)
})
