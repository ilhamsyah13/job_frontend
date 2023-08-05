import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { GetJobRequest } from "../redux/action/jobAction";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

export default function JobList() {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState({
    fulltime: false,
    description: "",
    location: "",
  });
  const [change, isChange] = useState(true);
  const { jobs } = useSelector((state) => state.jobState);

  useEffect(() => {
    if (change) {
      dispatch(GetJobRequest(filter));
    }
    isChange(false);
  }, [dispatch, filter, change]);

  const handleChange = (e) => {
    const target = e.currentTarget;

    setFilter({
      ...filter,
      [target.name]: target.type === "checkbox" ? target.checked : target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    isChange(true);
  };

  return (
    <div className="bg-teal-100 min-h-screen  ">
      <Navbar />
      <div className="p-8">
        <form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-8 gap-8 justify-center">
            <div className="col-span-3">
              <label className="block font-semibold m-1">Job Description</label>
              <input
                type="text"
                name="description"
                className=" w-full p-1 border-4 border-teal-300 "
                placeholder="Filter by title, benefits, companies, expertise"
                onChange={handleChange}
              />
            </div>
            <div className="col-span-3 ">
              <label className="block font-semibold m-1">Location</label>
              <input
                type="text"
                name="location"
                className="border-4 border-teal-300 w-full p-1"
                placeholder="Filter by city, state, zip code or country"
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center gap-3  ">
              <input
                name="fulltime"
                type="checkbox"
                className="border border-black"
                onChange={handleChange}
              />
              <label>Full time only</label>
            </div>
            <div className="flex items-center justify-center ">
              <button
                className="bg-gray-500 text-gray-100 px-5 py-3 border rounded-lg"
                type="submit"
              >
                Search
              </button>
            </div>
          </div>
        </form>
        <div className="p-8 bg-white mt-5 border-8 border-teal-300">
          <h1 className="text-3xl font-bold">Job List</h1>
          <div className="mt-5">
            {jobs ? (
              jobs.map((item) => (
                <div
                  className="flex justify-between border-t-2 border-teal-500 p-5"
                  key={item.id}
                >
                  <div>
                    <Link to={item.id}>
                      <p className="text-blue-800 font-bold">{item.title}</p>
                    </Link>
                    <p className="font-light">
                      {item.company} -
                      <span className="text-red-600 font-bold">
                        {" "}
                        {item.type}
                      </span>
                    </p>
                  </div>
                  <div className="text-right">
                    <p>{item.location}</p>
                    <p className="font-light">
                      about {moment(item.created_at).fromNow()}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <h1>Loading ...</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
