const express = require("express");
const app = express();
require("./api/data/db"); //always import before any routes

//import models here

app.set("port",5050);

//import routes here 



//use middlewares here

app.use(express.json({extended:false}))

const server = app.listen(app.get("port"),function(){
    console.log("Running on port ",server.address().port);
});
