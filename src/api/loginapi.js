var express = require("express");
var app = express(); //include the module .this give us the capability the read the body.
const axios = require('axios');
var bodyParser = require("body-parser");
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
//import users from "./../assets/users.json";
//import users from "./../assets/users.json";

const fs = require('fs');
var users=[];

//let users = ["vineeta:test123","meenu:test123","pankaj:test123","rakesh:test123"];
app.post("/Login", function (request, response) {
  let user1 = request.body.username;
  let passwd = request.body.password;
  console.log(user1);
  if(!user1) {
      response.status(400).json("enter username");
// stop further execution in this callback
      return;
  }
  if(!passwd) {
      response.status(400).json("enter password");
// stop further execution in this callback
      return;
  }
//console.log("sds")
const st="http://localhost:5000/users/"+user1;
console.log(st)
  axios.get(st).then((res)=>{// axios sends the http async req to end points , here we are sending to port o 4000.
   console.log("res data  ... ",res.data);
   if(res.data.password==passwd){
    console.log("success");
    response.status(200).json("user authenticated");

    return;

   }
}).catch((err)=>{
//alert("Log Fail");
   console.log("log fail");
   response.status(400).json("user does not exist");
    return;
  
})

    
});
app.listen(4000);
