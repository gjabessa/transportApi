const mongoose = require("mongoose")
const User = mongoose.model("User");

const getDestination = function(req,res){
    const id = req.params.id;
    User.findById(id).exec(function(err,user){
        const response = {
            status:200,
            data: user
        }
        if(err){
            response.status = 500;
            response.data = err;
        } else if (!user){
            response.status = 400;
            response.data = "User not found";
        } else if (user){
            response.status = 200;
            response.data = user.destinations;
        }
        res.status(response.status).json(response)
    })
}
function _addDestination(req,res,user){
    const destination = {name: req.body.name, visitScheduleDate: Date.now()}
    if(!user.destinations){
        user.destinations = [];
    } 
    user.destinations.push(destination)
    user.save(function(err,user){
       const response = {
            status:200,
            data: user
        }
        if(err){
            response.status = 500;
            response.data = err;
        }
        res.status(response.status).json(response.data)
    })
}
const addDestination = function(req,res){
    const id = req.params.id;
    User.findById(id).exec(function(err,user){
        const response = {
            status:200,
            data: user
        }
        if(err){
            response.status = 500;
            response.data = err;
        } else if(!user) {
            response.status = 404;
            response.data = "User not found";
        } 
        if (user){
            _addDestination(req,res,user)
        }  else {
            res.status(response.status).json(response.data)
        }
    })
}
const fullUpdateDestination = function(req,res){
    const id = req.params.id;
    User.findById(id).exec(function(err,user){
        const response = {
            status:200,
            data: user
        }
        if(err){
            response.status = 500;
            response.data = err;
        } else if(!user){
            response.status = 404;
            response.data = "User not found"
        } 
        if (user){
            _addDestination(req,res,user)
        }  else {
            res.status(response.status).json(response.data)
        }

    })

}
function _deleteDestination(req,res,user){
    console.log(user)
    user.destinations = []
    console.log(user)
            user.save(function(err,newUser){
                const response = {
                    status:200,
                    data: newUser
                }
                if(err){
                    response.status = 500;
                    response.data = err;
                }
                res.status(response.status).json(response.data)
            })
}
const deleteDestination = function(req,res){
    const id = req.params.id;
    User.findById(id).exec(function(err,user){
        const response = {
            status:200,
            data: user
        }
        if(err){
            response.status = 500;
            response.data = err;
        } else if (!user){
            response.status = 404;
            response.data = "User not found";
        } else if (!user.destination){
            response.status = 404;
            response.data = "Destination not found";
        }
        if(user.destinations){
            _deleteDestination(req,res,user)
        } else {
            res.status(response.status).json(response.data)
        }

    })
}

module.exports = {getDestination, addDestination, fullUpdateDestination, deleteDestination}