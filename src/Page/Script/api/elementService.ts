import { axiosClient } from "@/constant";
// import { ElementModel } from "../model";

export const createElement = async (element: any) => {
  try {
    const response = await axiosClient.post("/element", element);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating program:", error);
    throw error;
  }
};
