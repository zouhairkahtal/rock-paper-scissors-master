import ScoreBar from "./componets/ScoreBar";
import Buttons from "./componets/Buttons";
import rules from "../public/images/image-rules.svg";
import close from "../public/images/icon-close.svg";
import { useState } from "react";

function App() {
  const [ruleshow, setRuleshow] = useState(false);

  const [score, setScore] = useState(0);

  return (
    <>
      <div className="relative w-full h-screen radial-gradient overflow-hidden">
        <div className="w-full h-full pt-10 gap-10 max-[950px]:gap-0 flex flex-col justify-start items-center">
          <div className="  max-md:px-10 max-md:w-full ">
            <ScoreBar score={score} />
          </div>

          <div>
            <Buttons setScore={setScore} />
          </div>
          <div className="absolute bottom-10 right-10 max-sm:right-0 max-sm:w-full max-sm:flex max-sm:justify-center  ">
            <button
              onClick={() => setRuleshow(true)}
              className="w-36 h-12 bg-transparent border border-white/80 text-white/80 rounded-lg"
            >
              RULES
            </button>
          </div>
        </div>
      </div>

      <div>
        {ruleshow && (
          <div
            onClick={() => setRuleshow(false)}
            className="absolute w-full h-full  bg-black/50 z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
          >
            <div className="w-[450px] h-[450px] max-sm:w-full max-sm:h-full bg-white  flex flex-col items-center justify-between max-sm:justify-center max-sm:gap-44 p-10 rounded-lg">
              <div className="w-full    flex items-center justify-between ">
                <h1 className="text-navy-900 text-3xl font-semibol max-sm:text-center max-sm:w-full max-sm:font-bold">
                  RULES
                </h1>
                <img
                  onClick={() => setRuleshow(false)}
                  src={close}
                  className="cursor-pointer max-sm:hidden"
                  alt="close"
                />
              </div>

              <img src={rules} alt="rules" />

              <img
                onClick={() => setRuleshow(false)}
                src={close}
                className="cursor-pointer max-sm:block hidden"
                alt="close"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
