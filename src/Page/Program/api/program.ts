import { axiosClient } from "@/constant";
import { ProgramModel } from "@/Page/Program/model";

export const createProgram = async (program: ProgramModel) => {
  try {
    const response = await axiosClient.post("/program", program);
    return response.data;
  } catch (error) {
    console.error("Error creating program:", error);
    throw error;
  }
};

export const getPrograms = async () => {
  try {
    const response = await axiosClient.get("/program");
    return response.data;
  } catch (error) {
    console.error("Error getting programs:", error);
    throw error;
  }
};

export const getProgramById = async (id: number) => {
  try {
    const response = await axiosClient.get(`/program/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error getting program with id ${id}:`, error);
    throw error;
  }
};

export const updateProgram = async (id: number, program: ProgramModel) => {
  try {
    const response = await axiosClient.patch(`/program/${id}`, program);
    return response.data;
  } catch (error) {
    console.error(`Error updating program with id ${id}:`, error);
    throw error;
  }
};

export const deleteProgram = async (id: number) => {
  try {
    const response = await axiosClient.delete(`/program/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting program with id ${id}:`, error);
    throw error;
  }
};
