import axios from "axios";

const list = async (payload) => {
  try {
    const result = await axios.get(
      `http://localhost:3002/api/v1/jobs?full_time=${payload.fulltime}&description=${payload.description}&location=${payload.location}`
    );
    return result.data;
  } catch (error) {
    return error;
  }
};

const findOne = async (id) => {
  try {
    const result = await axios.get(`http://localhost:3002/api/v1/jobs/${id}`);
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
