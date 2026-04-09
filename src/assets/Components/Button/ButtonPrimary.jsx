import React from "react";

export default function ButtonPrimary({ text }) {
  return (
    <button className="px-2 py-3 w-auto rounded-sm bg-yellow-600 text-black flex justify-center hover:bg-yellow-700 duration-300 transition-colors">
      {text}
    </button>
  );
}
