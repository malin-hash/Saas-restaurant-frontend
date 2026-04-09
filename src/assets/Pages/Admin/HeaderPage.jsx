import React from "react";
import {
  AiFillAlert,
  AiFillCaretLeft,
  AiFillLeftSquare,
  AiOutlineDownSquare,
  AiOutlineLeftSquare,
} from "react-icons/ai";

export default function HeaderPage({ title }) {
  return (
    <div className="px-6 py-8 flex justify-between z-30 ">
      <div className="flex space-x-2">
        <AiFillCaretLeft className="p-1 bg-green-200 text-2xl" />
        <span className="font-bold text-sm">{title}</span>
      </div>
    </div>
  );
}
