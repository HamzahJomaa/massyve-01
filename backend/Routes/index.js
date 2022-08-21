const AuthenticationRoutes = require("./Auth")
exports.MainRoutes = (app) =>{
    app.use("/api/auth",AuthenticationRoutes)
}