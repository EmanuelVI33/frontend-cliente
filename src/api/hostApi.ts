import { axiosClient } from "@/constant";

export const uploadHost = async (formData: FormData) => {
    try {
      const response = await axiosClient.post("/host", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error uploading host:", error);
      throw error;
    }
  };

  export const getHosts = async () => {
    try {
      const response = await axiosClient.get("/host");
      return response.data;
    } catch (error) {
      console.error("Error getting hosts:", error);
      throw error;
    }
  };

