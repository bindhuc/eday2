const express = require("express");
const app = express();




// HTTP Methods:
// GET, POST, PUT, DELETE

// CRUD  : create read update delete
// GET : Send data to the front end ,By default http method is GET
// POST : Receive data from the front end 
// UPDATE/PUT : Receive data and update in database
// DELETE : Receive data from front end and delete in database

// app.get("/",(req,res)=>{
//      //res.sendStatus(201)
//      res.send("Success")
// })


// Data is sent in two ways they are:

//1.  Query Params :  passes multiple key value pairs
//2.  URL Params : passes only single value

// query params

// app.post("/addUser",(req,res)=>{
//     console.log(req.query);
//     // res.send(req.query)
//     res.send("Success")
// })




// URL params

app.put("/editUser/:id",(req,res)=>{
    console.log(req.params);
    res.send("Success")
})


app.listen(3001, () => {
    console.log("Server is running at port 3001");
});

//CORS : cross origin resource sharing
// CORS is a policy, backend application allowing frontend application to connect














