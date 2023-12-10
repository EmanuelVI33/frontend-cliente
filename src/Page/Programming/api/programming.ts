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
    console.error("Error creating programming:", error);
    throw error;
  }
};


export const updateProgramming = async (programming: ProgrammingModel) => {
  try {
    const response = await axiosClient.patch(`/programming/${programming.id}`, programming);
    return response.data;
  } catch (error) {
    console.error(`Error updating programming with id ${programming.id}:`, error);
    throw error;
  }
};

export const deleteProgramming = async (id: number) => {
  console.log("deleting...")
  try {
    const response = await axiosClient.delete(`/programming/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting programming with id ${id}:`, error);
    throw error;
  }
};

