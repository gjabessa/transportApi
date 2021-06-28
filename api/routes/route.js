const express = require("express");
const router = express.Router();
const user = require("../controller/user");
const destination = require("../controller/destination");
//User route

router.route("/")
.get(user.getAllUsers)
.post(user.createUser)

router.route("/:id")
.get(user.getOneUser)
.put(user.fullUpdateUser)
.patch(user.partialUpdate)
.delete(user.deleteUser)

// destination routes

router.route("/:id/destination")
.get(destination.getDestination)
.post(destination.addDestination)
.put(destination.fullUpdateDestination)
.delete(destination.deleteDestination)

module.exports = router;