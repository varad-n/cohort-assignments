// creating an HTTP Server(express)


const express = require("express");
const app = express();


const users = [{
    name: "John",
    kidneys: [{
        healthy: false
    }]
}];


app.get("/", function(req, res){
    const johnK = users[0].kidneys;
    console.log(johnK);
})

app.listen(3000);