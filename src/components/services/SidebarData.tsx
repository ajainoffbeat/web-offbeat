import React from "react";
import ServiceData from "../../data.ts/ServiceData";
import { useNavigate } from "react-router-dom";
interface Tab {
  currTab: number;
  setCurrTab: React.Dispatch<React.SetStateAction<number>>;
  currId: number;
}

const Sidebarbutton = ({ currId }: Tab) => {
  const navigate =useNavigate();
  return (
    <div>
      <span className="flex w-full pb-4 font-bold text-left rounded-sm px-3 py-2 text-base text-black dark:text-white">
        Other Services
      </span>
      <ul>
        {ServiceData.map((tab, index) => (
          <>
            {tab._id !== currId && (
              <li key={index}>
                <button
                  onClick={() => navigate(`/services/${tab._id}`)}
                  className={`flex w-full text-left rounded-sm px-3 py-2 text-base text-black dark:text-white`}
                >
                  {tab.title}
                </button>
              </li>
            )}
          </>
        ))}
      </ul>
    </div>
  );
};

export default Sidebarbutton;
