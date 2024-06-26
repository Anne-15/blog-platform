import axios from "axios";

export const allsoftwarePJS = async () => {
  const res = await axios.get("https://www.riishi.net/api/projects");
  return res.data;
};
