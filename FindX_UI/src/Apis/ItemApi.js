import axios from "axios";
import axiosInstant from "./axiosInstant";

export const getAllItemsList=()=>{


    return axiosInstant.get("/item");
}

export const getItemDetails=async(id)=>{
    return axiosInstant.get(`/item/item-details/${id}`);


}
export const saveItemDetails=(items)=>{

    return axiosInstant.post("/item/create-item",items);
}