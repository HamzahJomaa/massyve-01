const { verifyToken } = require("../Util/Helpers/jwt")
const {ErrorStatus} = require("../Constants/error/errorStatus");

exports.authenticate = () => {
    return (req, res, next) => {
        try{
            if (req.headers && typeof req.headers.authentication === "string"){
                req.user = verifyToken(req.headers.authentication)
            }else{
                return res.status(ErrorStatus.NOT_AUTHORIZED.code).json(ErrorStatus.NOT_AUTHORIZED)
            }
        }catch(err){
            if (err.name !== 'JsonWebTokenError') console.error(err)
            return res.status(403).json({ status: err.message })
        }
        // authentication successful
        next()
    }
}