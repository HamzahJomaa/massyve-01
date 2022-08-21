import { baseUrl } from "./config";
import axios from "axios"

export const getUserData = async ({token}) =>{
    return await axios.get(`${baseUrl}/auth/user`,{headers:{ "Authentication": token }})
}

export const SigninApi = async ({username,password}) =>{
    return await axios.put(`${baseUrl}/auth/signin`, {username,password})
}