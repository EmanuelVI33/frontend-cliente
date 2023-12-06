import { axiosClient } from "@/constant";
import { ElementModel } from "../model";

export const createElement = async (element: FormData) => {
  try {
    const response = await axiosClient.post("/element", element);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating program:", error);
    throw error;
  }
};

export const getElementsByProgramming = async (id: string | null) => {
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

export const triggerElement = async ({
  elementsIndex,
  programmingId,
}: {
  elementsIndex: number[];
  programmingId: number;
}) => {
  try {
    console.log(`id de programming: ${elementsIndex}`);
    const response = await axiosClient.post("/element/trigger", {
      elementsIndex,
      programmingId,
    });
    console.log("Response " + response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating program:", error);
    throw error;
  }
};
