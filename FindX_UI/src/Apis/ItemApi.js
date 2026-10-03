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

export const exploreItems = (params = {}) => {
  // Remove keys with empty string, null, undefined, or default "all" values
  const cleanParams = Object.fromEntries(
    Object.entries(params).filter(
      ([_, value]) => value !== "" && value !== null && value !== undefined && value !== "all"
    )
  );

  return axiosInstant.get("/item/search", { params: cleanParams });
};

export const deleteItemById=(id)=>{

  return axiosInstant.delete(`/item/delete/${id}`);
}

export const updateItemDetails=(id,itemdata)=>{

  return axiosInstant.put(`item/updatedItems/${id}`,itemdata);
}
