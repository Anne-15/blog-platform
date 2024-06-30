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
