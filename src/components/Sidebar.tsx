import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css"

const Sidebar = () => {
  const [data, setData] = useState([]);

  return (
    <div className="h-full bg-slate-300 navbar">
      <nav className="text-gray-800">
        <div className="px-3 py-5 text-3xl font-bold uppercase black">TEST</div>

        <div
          className="py-5 px-3 text-grey-700  hover:text-gray-500"
          onClick={() => window.open(`/`)}
        >
          Contact
        </div>
        <div
          className="py-5 px-3 text-grey-700  hover:text-gray-500"
          onClick={() => window.open(`/chart`)}
        >
          Chart
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
