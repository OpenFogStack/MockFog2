const express = require("express");
const networkService = require("./services/networkService.js")
const networkController = require("./controllers/networkController.js")

const app = express()
const port = process.env.AGENT_PORT || 3000

// setup viewengine
app.set("view engine", "ejs");
app.get("/", function(req, res) {
    console.log("Called")
    console.log(networkService.tcconfig())
    res.render("test", { tcconfig: networkService.tcconfig() })
})

// setup controllers
networkController(app)

console.log("Agent started, listening on port " + port)
app.listen(port)