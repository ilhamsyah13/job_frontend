import axios from "axios";

const BASE_URL = "http://localhost:3000/api/recruitments/positions";

const list = async (payload) => {
  try {
    const result = await axios.get(
      `${BASE_URL}?full_time=${payload.fulltime}&description=${payload.description}&location=${payload.location}`
    );
    return result.data;
  } catch (error) {
    return error;
  }
};

const findOne = async (id) => {
  try {
    const result = await axios.get(`${BASE_URL}/${id}`);
    return result.data;
  } catch (error) {
    return error;
  }
};

export const allFunc = {
  list,
  findOne,
};

export default allFunc;
