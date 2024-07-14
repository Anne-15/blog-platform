import axios from "axios";

export const allsoftwarePJS = async () => {
  try {
    const res = await axios.get("https://www.riishi.net/api/projects");
    return res.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error; // Rethrow the error to handle it in the calling code
  }
};

export const getoneProject = async (id: string) => {
  try {
    const res = await axios.get("https://www.riishi.net/api/projects", {
      params: { id: id },
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error; // Rethrow the error to handle it in the calling code
  }
};

export const addProject = async (values: any) => {
  try {
    const res = await axios.post(
      "https://www.riishi.net/api/projects",
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
