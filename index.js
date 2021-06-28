const express = require("express");
const app = express();

require("./api/data/db"); //always import before any routes


//import models here
require("./api/model/user")
require("./api/model/route")
require("./api/model/destination")


//import routes here 
const user = require("./api/routes/route")



//use middlewares here
app.use(express.json({extended:false}))
app.use("/users",user)



app.set("port",5050);

const server = app.listen(app.get("port"),function(){
    console.log("Running on port ",server.address().port);
});
