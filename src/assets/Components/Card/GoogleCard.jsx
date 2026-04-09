import React from "react";

export default function GoogleCard({ text }) {
  return (
    <button className="flex gap-2 border border-gray-300 rounded-lg px-4 py-2 w-full hover:bg-gray-100 transition">
      <img src="/google.png" alt="Google" className="w-5 h-5" />
      <span className="text-xs font-medium text-gray-700">{text}</span>
    </button>
  );
}
