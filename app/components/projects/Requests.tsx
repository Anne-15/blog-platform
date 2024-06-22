"use server";

import axios from "axios";

export const getProjects = async () => {
  try {
    const data = await axios.get("http://localhost:3001/api/projects");
    if(data.status === 200){
        console.log(data.data);
        return data.data;
    }
  } catch (error) {
    console.error("Error occured", error);
  }
};
