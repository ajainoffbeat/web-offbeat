import React from "react";

interface Tab {
  currTab: number;
  setCurrTab: React.Dispatch<React.SetStateAction<number>>;
}

const tabs = [
  "Offbeat Software Solutions",
  "Why Offbeat?",
  "Our Services",
  "Our Vision",
];

const Sidebarbutton = ({ currTab, setCurrTab }: Tab) => {
  return (
    <ul className="flex justify-center gap-2">
      {tabs.map((tab, index) => (
        <li key={index}>
          <button
            onClick={() => setCurrTab(index)}
            className={`relative flex w-full rounded-md px-3 py-2 text-base text-white dark:text-white overflow-hidden ${
              currTab === index ? "bg-[rgb(7_60_93)]" : ""
            } group`}
          >
            <span className="absolute left-0 top-0 h-full w-0 bg-primaryho transition-all duration-300 ease-in-out group-hover:w-full"></span>
            <span className="relative z-10">{tab}</span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Sidebarbutton;
