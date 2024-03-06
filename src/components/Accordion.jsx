/* eslint-disable react/prop-types */
import { HiChevronRight, HiChevronDown } from "react-icons/hi2";
import { useState } from "react";

function Accordion({ title, bold, children }) {
  const [isOpen, setIsopen] = useState(false);
  return (
    <div
      className={`w-full transition-all duration-200 overflow-hidden flex flex-col gap-2 p-4 ${
        isOpen ? "h-auto" : "h-12"
      }`}
    >
      <div className="flex justify-between" onClick={() => setIsopen(!isOpen)}>
        <span className={`active:bg-green-500 ${bold && "font-bold"}`}>
          {title}
        </span>
        {isOpen ? <HiChevronDown /> : <HiChevronRight />}
      </div>
      <div>{children}</div>
    </div>
  );
}

export default Accordion;
