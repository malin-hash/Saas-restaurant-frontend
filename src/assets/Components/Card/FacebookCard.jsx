import React from "react";

export default function FacebookCard({ logo, text }) {
  return (
    <button className="flex gap-2 border border-gray-300 rounded-lg px-4 py-2 w-full hover:bg-gray-100 transition">
      <p className=" text-blue-600 md:text-md text-lg">{logo}</p>
      <span className="text-xs font-medium text-gray-700">{text}</span>
    </button>
  );
}
