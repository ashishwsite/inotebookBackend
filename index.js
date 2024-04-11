const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors') 
connectToMongo();
const app = express()
const port =process.env.PORT|| 5000
const corsconfig={
  origin:"*",
  Credential:true,
  methods:["GET","POST","PUT","DELETE"],
}
app.options("",cors(corsconfig));
app.use(cors(corsconfig))
const path = require("path");
app.use(express.json())
// // first url which to check the server by defalut this requst  through this url is 
app.use('/',(req,res)=>{
res.send("hello ramshish it is generated on get reqest of URl(loacalhost:5000/) ")
})
// BUILD REMOVE FROM CONGFIG
// // seond your to check route 
// app.get('/',(req,res)=>{
//   res.send("this shown whenever  your requst is / or deafult")
// })
// Available Routes ksi aur folder se rout ko lekar hit kar rah hua
// app.use(route,location) to hit rote from other file
// app.use('/api/auth', require('./routes/auth'))// require(location of file where route is presnt)
// app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`)
})
