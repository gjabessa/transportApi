const mongoose=require("mongoose");
const destinationSchema = require("./destination");

const userSchema=new mongoose.Schema({
    name: String,
    destinations: [destinationSchema],
    visitedDestinations: [destinationSchema],
    budget: Number,
    

});

mongoose.model("User",userSchema,"users");
module.exports = userSchema

