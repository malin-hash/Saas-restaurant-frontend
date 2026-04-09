import Fab from "@mui/material/Fab";
import { ProfileOneUser } from "../../../Apis/axios";
import React, { useState, useEffect } from "react";
import {
  AiFillProduct,
  AiFillSetting,
  AiOutlineLogout,
  AiOutlineMenu,
  AiOutlinePaperClip,
  AiOutlineUserAdd,
  AiTwotoneMessage,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
export default function Sidbar() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await ProfileOneUser();
        setUser(res.data);
      } catch {
        return null;
      }
    };
    getUsers();
  }, []);
  const nav = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    nav("/");
  };
  return (
    <div className="w-56 w h-screen bg-green-950 text-gray-200 p-4">
      <div className="mt-10">
        <ul className="space-y-2">
          <li>
            <NavLink
              end
              className={({ isActive }) =>
                isActive
                  ? "flex space-x-3  p-2 rounded-md bg-yellow-600 transition"
                  : "flex space-x-3  p-2 rounded-md  hover:bg-yellow-600 transition"
              }
              to="/admin"
            >
              <AiOutlineMenu className="text-xl" />
              <span className="text-sm">Tableau de Bord</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/settings"
              className={({ isActive }) =>
                isActive
                  ? "flex space-x-3  p-2 rounded-md bg-yellow-600 transition"
                  : "flex space-x-3  p-2 rounded-md  hover:bg-yellow-600 transition"
              }
            >
              <AiFillSetting className="text-xl" />
              <span className="text-sm">Paramètres</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/orders"
              className={({ isActive }) =>
                isActive
                  ? "flex space-x-3  p-2 rounded-md bg-yellow-600 transition"
                  : "flex space-x-3  p-2 rounded-md  hover:bg-yellow-600 transition"
              }
            >
              <AiFillProduct className="text-xl" />
              <span className="text-sm">Commandes</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/products"
              className={({ isActive }) =>
                isActive
                  ? "flex space-x-3  p-2 rounded-md bg-yellow-600 transition"
                  : "flex space-x-3  p-2 rounded-md  hover:bg-yellow-600 transition"
              }
            >
              <AiOutlinePaperClip />
              <span className="text-sm">Nourritures & Boissons</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/users"
              className={({ isActive }) =>
                isActive
                  ? "flex space-x-3  p-2 rounded-md bg-yellow-600 transition"
                  : "flex space-x-3  p-2 rounded-md  hover:bg-yellow-600 transition"
              }
            >
              <AiOutlineUserAdd />
              <span className="text-sm">Utilisateurs</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <hr className="mt-2 text-gray-600" />
      <span className="mt-1 text-gray-400 text-xs">Autres</span>
      <div className="mt-3">
        <ul className="space-y-3">
          <li>
            <NavLink
              to="/admin/notifications"
              className={({ isActive }) =>
                isActive
                  ? "flex space-x-3  p-2 rounded-md bg-yellow-600 transition"
                  : "flex space-x-3  p-2 rounded-md  hover:bg-yellow-600 transition"
              }
            >
              <AiTwotoneMessage className="text-xl flex justify-between" />
              <span className="text-sm">Notifications</span>
              <span className="py-1 px-2 text-xs rounded-full bg-yellow-700 font-bold">
                3
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="p-2 rounded-lg bg-white/10 mt-2">
        <div className="flex justify-center">
          <img
            src="/malin.PNG"
            alt="Profil"
            className="w-14 h-14 object-cover rounded-full"
          />
        </div>
        <span className="flex justify-center font-semibold text-sm text-gray-200">
          {user?.email}
        </span>
        <span className="flex justify-center  text-xs text-gray-400">
          Administrateur
        </span>
        <Link
          to="/admin/profile"
          className="px-2 py-1 rounded-xl bg-white/15 flex justify-center mt-2 text-sm hover:bg-white/30 transition-all"
        >
          Ouvrir Profil
        </Link>
      </div>
      <div
        onClick={() => logout()}
        className="flex space-x-2 p-1 bg-gray-400 rounded-md text-sm mt-2 cursor-pointer hover:bg-gray-500 transition justify-center"
      >
        <AiOutlineLogout className="mt-1" />
        <span>Se déconnecter</span>
      </div>
    </div>
  );
}
