import axios from 'axios'

const axiosInstant=axios.create({
    baseURL:"http://localhost:8080/api"
    ,
    headers:{
         "Content-Type": "application/json",
    }



});

export default axiosInstant;
