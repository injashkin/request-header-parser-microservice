const express = require("express")
const app = express()

//Без этих двух строк сайт freecodecamp тестирует данный прект на glitch.com с ошибкой
var cors = require("cors");
app.use(cors());

app.get("/api/whoami/", (req, res) => {
    res.json({
        ipaddress: req.ip,
        "language": req.headers["accept-language"],
        "software": req.headers["user-agent"]
    })
})

//Любой путь будет перенапрален на /api/whoami/
app.get('*', (req, res) => {
    res.redirect('api/whoami/')
})

app.listen(3000)