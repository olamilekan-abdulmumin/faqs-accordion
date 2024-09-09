import Star from "../assets/icon-star.svg";

import { useState } from "react";
import FirstAccordion from "./FirstAccordion";

function Accordion() {
  const [firstAccordion, setFirstAccordion] = useState(false);
  const [secondAccordion, setSecondAccordion] = useState(false);
  const [thirdAccordion, setThirdAccordion] = useState(false);
  const [fourthAccordion, setFourthAccordion] = useState(false);

  return (
    <main className="bg-[#fff] py-4 px-6 mt-8 w-[500px] mx-auto rounded-lg flex flex-col gap-4 absolute top-10 left-[30%] shadow-lg">
      <div className="flex items-center gap-4">
        <img src={Star} alt="" />
        <h1 className="font-primary text-5xl font-bold">FAQS</h1>
      </div>

      <FirstAccordion
        title="What is Frontend Mentor, and how will it help me?"
        body=" Frontend Mentor offers realistic coding challenges to help developers
          improve their frontend coding skills with projects in HTML, CSS, and
          JavaScript. It's suitable for all levels and ideal for portfolio
          building."
        isAccordionOpen={firstAccordion}
        setIsAccordionOpen={setFirstAccordion}
      />

      <FirstAccordion
        title="Is Frontend Mentor free?"
        body="Yes, Frontend Mentor offers both free and premium coding challenges,
          with the free option providing access to a range of projects suitable
          for all skill levels."
        isAccordionOpen={secondAccordion}
        setIsAccordionOpen={setSecondAccordion}
      />
      <FirstAccordion
        title="Can I use Frontend Mentor projects in my portfolio?"
        body="Yes, you can use projects completed on Frontend Mentor in your
          portfolio. It's an excellent way to showcase your skills to potential
          employers!"
        isAccordionOpen={thirdAccordion}
        setIsAccordionOpen={setThirdAccordion}
      />
      <FirstAccordion
        title="How can I get help if I'm stuck on a Frontend Mentor challenge?"
        body="The best place to get help is inside Frontend Mentor's Discord
          community. There's a help channel where you can ask questions and seek
          support from other community members."
        isAccordionOpen={fourthAccordion}
        setIsAccordionOpen={setFourthAccordion}
      />

      {/* <div className="pb-4 border-b border-light-pink space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="font-primary text-md">Is Frontend Mentor free?</h1>
          <button>
            <img src={IconMinus} alt="" />
          </button>
        </div>
        <p>
          Yes, Frontend Mentor offers both free and premium coding challenges,
          with the free option providing access to a range of projects suitable
          for all skill levels.
        </p>
      </div>
      <div className="pb-4 border-b border-light-pink space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="font-primary text-md">
            Can I use Frontend Mentor projects in my portfolio?
          </h1>
          <button>
            <img src={IconMinus} alt="" />
          </button>
        </div>
        <p>
          Yes, you can use projects completed on Frontend Mentor in your
          portfolio. It's an excellent way to showcase your skills to potential
          employers!
        </p>
      </div>
      <div className="pb-4 border-b border-light-pink space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="font-primary text-md">
            How can I get help if I'm stuck on a Frontend Mentor challenge?
          </h1>
          <button>
            <img src={IconMinus} alt="" />
          </button>
        </div>
        <p>
          The best place to get help is inside Frontend Mentor's Discord
          community. There's a help channel where you can ask questions and seek
          support from other community members.
        </p>
      </div> */}
    </main>
  );
}

export default Accordion;
