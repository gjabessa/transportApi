const mongoose=require("mongoose");

const addressSchema = new mongoose.Schema({
    name: String,
    location:{
        coordinates:{
            type:[Number],
            index:"2dsphere"
        }
    }
})

const routeSchema=new mongoose.Schema({
    startLocation:addressSchema,
    destination:addressSchema,
    distance: Number,
    cost: Number, //cost to travel this route, calculate on creation
    visitCount: Number
});

mongoose.model("Route",routeSchema,"routes");
module.exports = routeSchema

