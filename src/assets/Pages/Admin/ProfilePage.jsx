import React from "react";
import { AiOutlineUserAdd } from "react-icons/ai";

export default function ProfilePage() {
  return (
    <div className="flex gap-2 m-4 w-full ">
      <div className=" p-4 bg-green-100 rounded-md w-80">
        <div className="flex justify-center relative">
          <img
            src="/malin.PNG"
            alt="Profil"
            className="object-cover rounded-full w-24 h-24 "
          />
          <span className="absolute top-20 right-28 text-yellow-600 font-extrabold text-xl cursor-pointer">
            <AiOutlineUserAdd />
          </span>
        </div>
        <span className="flex justify-center font-semibold text-sm text-gray-700">
          Mokos Malin
        </span>
        <span className="flex justify-center  text-xs text-gray-500">
          Administrateur
        </span>
        <hr className="mt-3 border border-gray-400" />
      </div>
    </div>
  );
}
