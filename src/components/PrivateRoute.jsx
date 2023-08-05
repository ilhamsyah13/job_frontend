import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { UserProfile } = useSelector((state) => state.userState);
  return UserProfile ? <Outlet /> : <Navigate to={"/"} />;
}
