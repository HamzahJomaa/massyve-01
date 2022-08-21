const express = require("express")
const app = express()
const cors = require("cors")
const { connectDb } = require("./Config/Database")
const { MainRoutes } = require("./Routes")

app.use(cors())
app.use(express.json({limit: "20mb"}));
app.use(express.urlencoded({extended: false}));

MainRoutes(app)
connectDb(() => {
    // httpServer.listen(3500)
    // httpsServer.listen(port, "0.0.0.0")
    app.listen(3000, "0.0.0.0", () => {
        console.log(`Listening on port ${3000}`)
    })
})