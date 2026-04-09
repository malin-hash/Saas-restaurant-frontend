import React from "react";
import FromConnexion from "../Components/Form/FromConnexion";
import { Outlet } from "react-router-dom";

export default function LoginPages() {
  return (
    <div className="bg-green-50 h-screen flex justify-center items-center p-5 md:p-16">
      <Outlet />
    </div>
  );
}
