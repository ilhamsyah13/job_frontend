import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserSignoutRequest } from "../redux/action/userAction";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(UserSignoutRequest());
    navigate("/");
  };
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-blue-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="">
            <a
              className="text-3xl leading-relaxed inline-block mr-4 py-2 whitespace-nowrap  text-white"
              href="#pablo"
            >
              <span className="font-bold">GitHub</span> Jobs
            </a>
          </div>
          <div className="">
            <button
              className=" leading-relaxed inline-block mr-4 p-4 rounded-2xl whitespace-nowrap text-white border  border-white hover:bg-white hover:text-blue-500"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
