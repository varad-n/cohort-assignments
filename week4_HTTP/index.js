const express = require("express");

const app = express();

const users = [{
    name:"John",
    kidneys: [{
        healthy: false
    }]
}];

app.use(express.json());

app.get("/", function(req, res) {
    const johnkidneys = users[0].kidneys;
    const numberofkidneys = johnkidneys.length;
    const numberofhealthy = 0;
    for(i = 0; i<johnkidneys.length; i++){
        if(johnkidneys[i].healthy){
            numberofhealthy = numberofhealthy + 1;
        }
    }

    const numberofunhealthy = numberofkidneys - numberofhealthy;
    res.json({
        johnkidneys,
        numberofhealthy,
        numberofunhealthy

    })
});

app.post("/", function(req, res){
    const ishealthy = req.body.ishealthy;
    users[0].kidneys.push({
        healthy: ishealthy
    })
    res.json({
        msg: "Done!"
    })
})

app.listen(3000);