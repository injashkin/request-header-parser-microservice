const express = require("express")
const app = express()

app.use((req, res, next) => {
    console.log(req.headers)
    next()
})

app.get("/", (req, res) => {

    res.json({
        "ipaddress": req.ip,
        "language": req.headers["accept-language"],
        "software": req.headers["user-agent"]
    })
})

app.listen(3000)