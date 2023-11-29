import { axiosClient } from "@/constant";
import { ProgrammingModel } from "../model/ProgrammingModel";

export const getProgramsByProgramming = async (id: number) => {
  try {
    const response = await axiosClient.get(`/program/${id}/programming`);
    return response.data;
  } catch (error) {
    console.error("Error getting programs:", error);
    throw error;
  }
};

export const createProgramming = async (programming: ProgrammingModel) => {
  try {
    const response = await axiosClient.post("/programming", programming);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error creating program:", error);
    throw error;
  }
};
