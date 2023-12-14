import { axiosClient } from "@/constant";
import { ElementModel } from "../model";

export const createElement = async (element: FormData) => {
  console.log("create element", element);
  try {
    const response = await axiosClient.post("/element", element, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating program:", error);
    throw error;
  }
};

export const getElementsByProgramming = async (id: string | null) => {
  try {
    console.log(`id de programming get elements ------: ${id}`);
    const response = await axiosClient(`/element/programming/${id}`);
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
