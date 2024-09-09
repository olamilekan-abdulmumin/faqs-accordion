import React, { useState } from "react";
import IconMinus from "../assets/icon-minus.svg";
import IconPlus from "../assets/icon-plus.svg";

function FirstAccordion({ body, title, isAccordionOpen, setIsAccordionOpen }) {


  const handleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <div className="pb-4 border-b border-light-pink space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="font-primary text-md text-dark-purple hover:text-purple transition-colors duration-300 ease-linear cursor-pointer">{title}</h1>
        <button onClick={handleAccordion}>
          {isAccordionOpen ? (
            <img src={IconMinus} alt="" />
          ) : (
            <img src={IconPlus} alt="" />
          )}
        </button>
      </div>
      {isAccordionOpen ? <p className="text-purple">{body}</p> : null}
    </div>
  );
}

export default FirstAccordion;
