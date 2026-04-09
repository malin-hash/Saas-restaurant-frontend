import React from "react";
import Sidbar from "./Sidbar";
import { Outlet, useMatches } from "react-router-dom";
import HeaderPage from "./HeaderPage";

export default function Dashboard() {
  const matches = useMatches();
  const currentRoute = matches[matches.length - 1];
  const title = currentRoute?.handle?.label || "Tableau de bord";
  return (
    <div className="h-screen flex">
      <div>
        <Sidbar />
      </div>
      <div className="flex-col">
        <HeaderPage title={title} />
        <Outlet />
      </div>
    </div>
  );
}
