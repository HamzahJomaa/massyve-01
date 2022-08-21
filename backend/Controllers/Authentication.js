const { SuccessStatus } = require("../Constants/success/successStatus")
const { ErrorStatus } = require("../Constants/error/errorStatus")
const UserModel = require("../Models/User")
const bcrypt = require("bcryptjs")
const {generateJWT} = require("../Util/Helpers/jwt");


exports.GetUser = async (req, res) =>{
    try{
        let user = await UserModel.findById(req?.user?.user?.id)
        console.log(user)
        if (user)
            return res.status(SuccessStatus.DATA_RETRIEVED_SUCCESSFULLY.code).json({...SuccessStatus.DATA_RETRIEVED_SUCCESSFULLY,user})

        return res.status(ErrorStatus.DOES_NOT_EXIST.code).json(ErrorStatus.DOES_NOT_EXIST)

    }catch (e) {
        console.error(e)
        return res.status(ErrorStatus.SERVER_DOWN.code).json(ErrorStatus.SERVER_DOWN)
    }

}

exports.SignIn = async (req, res) =>{
    let { username, password } = req.body
    try{
        let user = await UserModel.findOne({$or:[{username},{email:username}]}) //signin by username or email


        if (!user)
            return res.status(ErrorStatus.USER_DOESNT_EXIST.code).json(ErrorStatus.USER_DOESNT_EXIST)

        let resultPassword = await bcrypt.compare(password,user.password)

        if (resultPassword){
            let token = generateJWT(user)
            return res.status(SuccessStatus.LOGIN_SUCCESSFUL.code).json({...SuccessStatus.LOGIN_SUCCESSFUL, token})
        }
        return res.status(ErrorStatus.WRONG_PASSWORD.code).json(ErrorStatus.WRONG_PASSWORD)

    }catch (e){
        console.log(e)
        return res.status(ErrorStatus.SERVER_DOWN.code).json(ErrorStatus.SERVER_DOWN)
    }

}

exports.SignUp = async (req ,res) =>{
    let { username, password, fullname, email } = req.body
    try{
        let checkUser = await UserModel.findOne({$or:[{username},{email}]})

        if (checkUser)
            return res.status(ErrorStatus.USER_EXIST.code).json(ErrorStatus.USER_EXIST)

        password = await bcrypt.hash(password,12)

        let user = await UserModel.create({username,password,email,fullname})

        if (user)
            return res.status(SuccessStatus.SIGNUP_SUCCESSFUL.code).json({...SuccessStatus.SIGNUP_SUCCESSFUL, user})

        return res.status(ErrorStatus.BAD_REQUEST.code).json(ErrorStatus.BAD_REQUEST)

    }catch (e) {
        console.log(e)
        return res.status(ErrorStatus.SERVER_DOWN.code).json(ErrorStatus.SERVER_DOWN)
    }
}