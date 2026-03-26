import rock from "../assets/images/icon-rock.svg";
import paper from "../assets/images/icon-paper.svg";
import scissors from "../assets/images/icon-scissors.svg";
import { useState, useEffect } from "react";
import triangle from "../assets/images/bg-triangle.svg";

function Buttons({ setScore }) {
  const [isScissors, setIsScissors] = useState(false);
  const [isPaper, setIsPaper] = useState(false);
  const [isRock, setIsRock] = useState(false);

  const [housePick, setHousePick] = useState(0);

  const [win, setWin] = useState("");

  function playAgain() {
    setIsScissors(false);
    setIsPaper(false);
    setIsRock(false);
    setHousePick(0);
  }

  function Result() {
    return (
      <>
        <div>
          <div className="w-36 h-12  rounded-lg flex flex-col items-center justify-center">
            <h1 className="text-4xl w-56 text-white  text-center font-bold uppercase">
              YOU {win}
            </h1>

            <button
              className=" w-44   py-4 bg-white rounded-lg mt-4 "
              onClick={playAgain}
            >
              Play Again
            </button>
          </div>
        </div>
      </>
    );
  }

  function checkWinner() {
    if (
      (isScissors && housePick === 1) ||
      (isPaper && housePick === 3) ||
      (isRock && housePick === 2)
    ) {
      console.log("win");
      setWin("win");

      setScore((prev) => prev + 1);
    } else if (
      (isPaper && housePick === 2) ||
      (isRock && housePick === 1) ||
      (isScissors && housePick === 3)
    ) {
      console.log("lose");
      setWin("lose");

      setScore((prev) => prev - 1);
    } else {
      console.log("draw");
      setWin("draw");
    }
  }

  useEffect(() => {
    checkWinner();
  }, [housePick]);

  function getRandomInt(max) {
    setHousePick(Math.floor(Math.random() * max) + 1);
  }

  function housePickImage() {
    if (housePick === 1) {
      return (
        <div className=" rounded-full   bg-blue-500 w-56 h-56  flex items-center justify-center border-b-[12px] border-blue-700">
          <div className="w-4/5 h-4/5 bg-white cursor-pointer scale-[0.98] border-t-[12px] rounded-full flex items-center justify-center">
            <img src={paper} alt="paper   " />
          </div>
        </div>
      );
    } else if (housePick === 2) {
      return (
        <div className=" rounded-full   bg-orange-500 w-56 h-56  flex items-center justify-center border-b-[12px] border-orange-600">
          <div className="w-4/5 h-4/5 bg-white cursor-pointer scale-[0.98] border-t-[12px] rounded-full flex items-center justify-center">
            <img src={scissors} alt="scissors   " />
          </div>
        </div>
      );
    } else if (housePick === 3) {
      return (
        <div className=" rounded-full   bg-red-600 w-56 h-56  flex items-center justify-center border-b-[12px] border-red-800">
          <div className="w-4/5 h-4/5 bg-white cursor-pointer scale-[0.98] border-t-[12px] rounded-full flex items-center justify-center">
            <img src={rock} alt="rock   " />
          </div>
        </div>
      );
    }
  }

  if (isScissors || isPaper || isRock) {
    return (
      <>
        <div className="   w-[800px] h-[500px] flex items-center justify-around">
          <div className="grid  h-[400px]">
            <h1 className="text-xl text-white  text-center">YOU PICKED</h1>
            {isScissors && (
              <div className=" rounded-full   bg-orange-500 w-56 h-56  flex items-center justify-center border-b-[12px] border-orange-600">
                <div className="w-4/5 h-4/5 bg-white cursor-pointer scale-[0.98] border-t-[12px] rounded-full flex items-center justify-center">
                  <img src={scissors} alt="scissors   " />
                </div>
              </div>
            )}
            {isPaper && (
              <div className=" rounded-full   bg-blue-500 w-56 h-56  flex items-center justify-center border-b-[12px] border-blue-700">
                <div className="w-4/5 h-4/5 bg-white cursor-pointer scale-[0.98] border-t-[12px] rounded-full flex items-center justify-center">
                  <img src={paper} alt="paper   " />
                </div>
              </div>
            )}
            {isRock && (
              <div className=" rounded-full   bg-red-600 w-56 h-56  flex items-center justify-center border-b-[12px] border-red-800">
                <div className="w-4/5 h-4/5 bg-white cursor-pointer scale-[0.98] border-t-[12px] rounded-full flex items-center justify-center">
                  <img src={rock} alt="rock   " />
                </div>
              </div>
            )}
          </div>

          <Result />

          <div className="grid  h-[400px]">
            <h1 className="text-xl text-white  text-center">
              THE HOUSE PICKED
            </h1>
            <div className=" w-56 h-56 rounded-full flex items-center justify-center">
              <div className="bg-black/20 w-56 h-56 rounded-full">
                {housePickImage()}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="relative w-[500px] h-[500px]  select-none  flex items-center justify-center  ">
        <img src={triangle} alt="triangle" />

        <div
          onClick={() => {
            setIsPaper(true);
            getRandomInt(3);
          }}
          className="absolute top-6  left-2 rounded-full   bg-blue-500 w-48 h-48  flex items-center justify-center border-b-[12px] border-blue-700"
        >
          <div className="w-4/5 h-4/5 bg-white cursor-pointer active:scale-[0.98] active:border-t-[12px] rounded-full flex items-center justify-center">
            <img src={paper} alt="paper   " />
          </div>
        </div>

        <div
          onClick={() => {
            setIsScissors(true);
            getRandomInt(3);
          }}
          className="absolute top-6  right-2 rounded-full   bg-orange-500 w-48 h-48  flex items-center justify-center border-b-[12px] border-orange-600"
        >
          <div className="w-4/5 h-4/5 bg-white cursor-pointer active:scale-[0.98] active:border-t-[12px] rounded-full flex items-center justify-center">
            <img src={scissors} alt="scissors   " />
          </div>
        </div>
        <div
          onClick={() => {
            setIsRock(true);
            getRandomInt(3);
          }}
          className="absolute bottom-20  left-2/2 rounded-full   bg-red-600 w-48 h-48  flex items-center justify-center border-b-[12px] border-red-800"
        >
          <div className="w-4/5 h-4/5 bg-white cursor-pointer active:scale-[0.98] active:border-t-[12px] rounded-full flex items-center justify-center">
            <img src={rock} alt="rock   " />
          </div>
        </div>
      </div>
    </>
  );
}

export default Buttons;
