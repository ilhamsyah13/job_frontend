import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FindJobRequest } from "../redux/action/jobAction";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";

export default function JobDetail() {
  const dispatch = useDispatch();

  const { job } = useSelector((state) => state.jobState);
  const { id } = useParams();
  useEffect(() => {
    dispatch(FindJobRequest(id));
  }, [dispatch, id]);

  const onImageError = (e) => {
    e.target.src = "/logo_company_default.png";
  };

  return (
    <div className="bg-teal-100 min-h-screen">
      <Navbar />
      <div className="p-8">
        <Link to={"/job"}>
          <h1 className="text-3xl text-blue-800 font-bold flex items-center gap-4">
            <span className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
                id="IconChangeColor"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                  id="mainIconPathAttribute"
                ></path>
              </svg>
            </span>
            Back
          </h1>
        </Link>
        <div className="p-8 bg-white mt-5 border-8 border-teal-300">
          <div className="my-4 py-4 border-b-4">
            <p className="font-light">
              {job.type} / {job.location}
            </p>
            <h1 className="text-3xl font-bold">{job.title}</h1>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
            <div
              dangerouslySetInnerHTML={{ __html: job.description }}
              className="col-span-3"
            ></div>
            <div>
              <div className="border-4 border-teal-300 p-4 bg-gray-200 mb-5">
                <p className="border-b-2 border-gray-400 font-semibold my-2 pb-1 ">
                  {job.company}
                </p>
                <img
                  src={
                    job.company_logo
                      ? job.company_logo
                      : "/logo_company_default.png"
                  }
                  alt={job.title}
                  onError={onImageError}
                  className="m-auto"
                />
                <a
                  href={job.company_url}
                  className="mt-2 underline text-blue-700"
                >
                  {job.company_url}
                </a>
              </div>
              <div className="border-4 border-teal-300 p-4 bg-yellow-100">
                <p className="border-b-2  font-semibold my-4 pb-3 ">
                  How to apply
                </p>
                <div
                  dangerouslySetInnerHTML={{ __html: job.how_to_apply }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
