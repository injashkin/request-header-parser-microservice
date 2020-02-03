const express = require("express")
const app = express()

var cors = require("cors");
app.use(cors());

app.get("/api/whoami/", (req, res) => {
    res.json({
        ipaddress: req.ip,
        "language": req.headers["accept-language"],
        "software": req.headers["user-agent"]
    })
})

app.listen(3000)