import axios from "axios";

const BASE_URL = "http://localhost:3000/api/recruitment/positions";

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
  console.log(id);
  try {
    const result = await axios.get(`${BASE_URL}/${id}`);
    console.log(result);
    return result.data[0];
  } catch (error) {
    return error;
  }
};

export const allFunc = {
  list,
  findOne,
};

export default allFunc;
