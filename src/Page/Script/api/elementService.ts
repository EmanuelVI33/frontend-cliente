import { axiosClient } from "@/constant";

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

export const getElementsByProgramming = async (id: number) => {
  try {
    console.log(`id de programming: ${id}`);
    const response = await axiosClient(`/programming/${id}/elements`);
    console.log("Response " + response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating program:", error);
    throw error;
  }
};
