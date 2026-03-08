const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static("public"))

let users=[]
let orders=[]

app.post("/signup",(req,res)=>{

const user=req.body

users.push(user)

res.json({message:"User registered"})

})

app.post("/order",(req,res)=>{

orders.push(req.body)

res.json({message:"Order placed"})

})

app.get("/orders",(req,res)=>{

res.json(orders)

})

app.listen(3000,()=>{

console.log("Server running on port 3000")

})