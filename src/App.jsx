import ScoreBar from "./componets/ScoreBar";
import Buttons from "./componets/Buttons";
import rules from "./assets/images/image-rules.svg";
import close from "./assets/images/icon-close.svg";
import { useState } from "react";

function App() {
  const [ruleshow, setRuleshow] = useState(false);

  return (
    <>
      <div className="relative w-full h-screen radial-gradient">
        <div className="w-full h-full pt-10 gap-10 flex flex-col justify-start items-center">
          <div>
            <ScoreBar />
          </div>

          <div>
            <Buttons />
          </div>
          <div className="absolute bottom-10 right-10 ">
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
            className="absolute w-full h-full bg-black/50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
          >
            <div className="w-[450px] h-[450px] bg-white flex flex-col items-center justify-between p-10 rounded-lg">
              <div className="w-full    flex items-center justify-between">
                <h1 className="text-navy-900 text-3xl font-semibold">RULES</h1>
                <img
                  onClick={() => setRuleshow(false)}
                  src={close}
                  className="cursor-pointer"
                  alt="close"
                />
              </div>

              <img src={rules} alt="rules" />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
