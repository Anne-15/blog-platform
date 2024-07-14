import axios from "axios";

export const alldesigns = async () => {
  try {
    const res = await axios.get("https://www.riishi.net/api/blogs");
    return res.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error; // Rethrow the error to handle it in the calling code
  }
};

export const getoneDesign = async (id: string) => {
  try {
    const res = await axios.get("https://www.riishi.net/api/blogs", {
      params: { id: id },
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error; // Rethrow the error to handle it in the calling code
  }
};

export const addDesign = async (values: any) => {
  try {
    const res = await axios.post(
      "https://www.riishi.net/api/blogs",
      {
        ...values,
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error; // Rethrow the error to handle it in the calling code
  }
};
