const mongoose=require("mongoose");
const routeSchema = require("./route");

const destinationSchema=new mongoose.Schema({
    name: String,
    numVisits: {
        type:Number,
        default:0
    },
    visitScheduleDate:Date, 
    route: routeSchema,

});

mongoose.model("Destination",destinationSchema,"destinations");
module.exports = destinationSchema