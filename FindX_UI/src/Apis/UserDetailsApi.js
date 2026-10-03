
import axiosInstant from "./axiosInstant";
export const registerUser=(userDeatils)=>{

    return axiosInstant.post("/auth/register",userDeatils);
}
export const userLogin=(userDetails)=>{
    return axiosInstant.post("auth/login",userDetails)
}
