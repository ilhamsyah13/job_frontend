import axios from "axios";
import Cookies from "js-cookie";

const signin = async (params) => {
  try {
    const result = await axios.post(`http://localhost:3000/user/auth`, params);
    return result;
  } catch (error) {
    return error;
  }
};

const profile = async () => {
  axios.defaults.headers.common = {
    Authorization: `Bearer ${Cookies.get("access-token")}`,
  };
  try {
    const result = await axios.get(`http://localhost:3000/user/profile`);
    return result;
  } catch (error) {
    return error;
  }
};

export const allFunc = {
  signin,
  profile,
};

export default allFunc;
