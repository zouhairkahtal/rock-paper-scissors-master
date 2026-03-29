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
          <div className=" h-12  rounded-lg flex flex-col items-center justify-center">
            <h1 className="text-5xl   text-white  text-center font-bold uppercase max-md:w-96">
              YOU {win}
            </h1>

            <button
              className=" w-56   py-3 bg-white rounded-lg mt-4 hover:text-red-600 font-semibold "
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
        <div className=" rounded-full   max-md:w-40 max-md:h-40 bg-blue-500 w-56 h-56 max-sm:w-32 max-sm:h-32  flex items-center justify-center border-b-[12px] border-blue-700">
          <div className="w-4/5 h-4/5 bg-white cursor-pointer scale-[0.98] border-t-[12px] rounded-full flex items-center justify-center">
            <img src={paper} alt="paper   " />
          </div>
        </div>
      );
    } else if (housePick === 2) {
      return (
        <div className=" rounded-full    max-md:w-40 max-md:h-40 bg-orange-500 w-56 h-56 max-sm:w-32 max-sm:h-32  flex items-center justify-center border-b-[12px] border-orange-600">
          <div className="w-4/5 h-4/5 bg-white cursor-pointer scale-[0.98] border-t-[12px] rounded-full flex items-center justify-center">
            <img src={scissors} alt="scissors   " />
          </div>
        </div>
      );
    } else if (housePick === 3) {
      return (
        <div className=" rounded-full   max-md:w-40 max-md:h-40 bg-red-600 w-56 h-56 max-sm:w-32 max-sm:h-32  flex items-center justify-center border-b-[12px] border-red-800">
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
        <div className="   max-[960px]:w-full max-[960px]:justify-center   w-full h-[500px] flex items-center max-sm:items-start justify-around ">
          <div className="grid max-sm:flex-col-reverse  max-md:w-3/6 max-md:h-[300px] max-md:flex max-md:flex-col max-md:items-center max-md:justify-center  h-[400px]">
            <h1 className="text-xl text-white max-sm:text-sm max-sm:font-bold  text-center">
              YOU PICKED
            </h1>
            {isScissors && (
              <div
                className={` ${win == "win" ? "bg-gray-600/40 max-md:w-[300px] w-[500px] max-sm:w-[200px] max-sm:h-[200px] max-md:h-[300px] h-[500px] rounded-full outline outline-gray-600/20 outline-[80px] max-md:outline-[40px]" : "  max-md:w-[300px] w-[500px] max-sm:w-[200px] max-sm:h-[200px] max-md:h-[300px] h-[500px] rounded-full  max-md:outline-[40px] "}   w-[500px] h-[500px]  max-md:w-[300px] max-md:h-[300px]  flex items-center justify-center`}
              >
                <div
                  className={`   ${win == "win" ? "bg-gray-600/40 max-md:w-[220px] w-[300px] max-sm:w-[120px] max-sm:h-[120px] max-md:h-[220px] h-[300px] rounded-full" : ""}  w-56 h-56 rounded-full flex items-center justify-center`}
                >
                  <div className=" rounded-full max-md:w-40 max-md:h-40 w-56 h-56 max-sm:w-32 max-sm:h-32  bg-orange-500   flex items-center justify-center border-b-[12px] border-orange-600">
                    <div className="w-4/5 h-4/5 bg-white cursor-pointer scale-[0.98] border-t-[12px] rounded-full flex items-center justify-center">
                      <img src={scissors} alt="scissors   " />
                    </div>
                  </div>
                </div>
              </div>
            )}
            {isPaper && (
              <div
                className={` ${win == "win" ? "bg-gray-600/40 max-md:w-[300px] w-[500px] max-sm:w-[200px] max-sm:h-[200px] max-md:h-[300px] h-[500px] rounded-full outline outline-gray-600/20 outline-[80px] max-md:outline-[40px]" : "  max-md:w-[300px] w-[500px] max-sm:w-[200px] max-sm:h-[200px] max-md:h-[300px] h-[500px] rounded-full  max-md:outline-[40px] "}   w-[500px] h-[500px]  max-md:w-[300px] max-md:h-[300px]  flex items-center justify-center`}
              >
                <div
                  className={`   ${win == "win" ? "bg-gray-600/40 max-md:w-[220px] w-[300px] max-sm:w-[120px] max-sm:h-[120px] max-md:h-[220px] h-[300px] rounded-full" : ""}  w-56 h-56 rounded-full flex items-center justify-center`}
                >
                  <div className=" rounded-full max-md:w-40 max-md:h-40 bg-blue-500  w-56 h-56 max-sm:w-32 max-sm:h-32  flex items-center justify-center border-b-[12px] border-blue-700">
                    <div className="w-4/5 h-4/5 bg-white cursor-pointer scale-[0.98] border-t-[12px] rounded-full flex items-center justify-center">
                      <img src={paper} alt="paper   " />
                    </div>
                  </div>
                </div>
              </div>
            )}
            {isRock && (
              <div
                className={` ${win == "win" ? "bg-gray-600/40 max-md:w-[300px] w-[500px] max-sm:w-[200px] max-sm:h-[200px] max-md:h-[300px] h-[500px] rounded-full outline outline-gray-600/20 outline-[80px] max-md:outline-[40px]" : "  max-md:w-[300px] w-[500px] max-sm:w-[200px] max-sm:h-[200px] max-md:h-[300px] h-[500px] rounded-full  max-md:outline-[40px] "}   w-[500px] h-[500px]  max-md:w-[300px] max-md:h-[300px]  flex items-center justify-center`}
              >
                <div
                  className={`   ${win == "win" ? "bg-gray-600/40 max-md:w-[220px] w-[300px] max-sm:w-[120px] max-sm:h-[120px] max-md:h-[220px] h-[300px] rounded-full" : ""}  w-56 h-56 rounded-full flex items-center justify-center`}
                >
                  <div className="  rounded-full max-md:w-40 max-md:h-40 bg-red-600 w-56 h-56 max-sm:w-32 max-sm:h-32  flex items-center justify-center border-b-[12px] border-red-800">
                    <div className="w-4/5 h-4/5 bg-white cursor-pointer scale-[0.98] border-t-[12px] rounded-full flex items-center justify-center">
                      <img src={rock} alt="rock   " />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div
            className=" h-full flex items-center max-[960px]:hidden
           justify-center  pt-52 z-10"
          >
            <Result />
          </div>

          <div className="grid max-sm:flex-col-reverse  max-md:w-3/6 max-md:h-[300px] max-md:flex max-md:flex-col max-md:items-center max-md:justify-center h-[400px]">
            <h1 className="text-xl text-white max-sm:text-sm max-sm:font-bold  text-center">
              THE HOUSE PICKED
            </h1>

            <div
              className={` ${win == "lose" ? "bg-gray-600/40 max-md:w-[300px] w-[500px] max-sm:w-[200px] max-sm:h-[200px] max-md:h-[300px] h-[500px] rounded-full outline outline-gray-600/20 outline-[80px] max-md:outline-[40px]" : "  max-md:w-[300px] w-[500px] max-sm:w-[200px] max-sm:h-[200px] max-md:h-[300px] h-[500px] rounded-full  max-md:outline-[40px] "}   w-[500px] h-[500px]  max-md:w-[300px] max-md:h-[300px]  flex items-center justify-center`}
            >
              <div
                className={`   ${win == "lose" ? "bg-gray-600/40 max-md:w-[220px] w-[300px] max-sm:w-[120px] max-sm:h-[120px] max-md:h-[220px] h-[300px] rounded-full" : ""}  w-56 h-56 rounded-full flex items-center justify-center`}
              >
                {housePickImage()}
              </div>
            </div>
          </div>

          <div className="hidden max-[1224px]:block absolute bottom-44 max-md:w-full max-md:flex max-md:justify-center    ">
            <div className="w-36 h-12 bg-transparent   rounded-lg">
              <Result />
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="relative w-[500px] h-[500px]  max-sm:w-[300px] max-sm:h-[300px]  mt-[100px] max-[950px]:mt-20 select-none  flex items-center justify-center   ">
        <img src={triangle} alt="triangle" className="max-sm:w-[250px]" />

        <div
          onClick={() => {
            setIsPaper(true);
            getRandomInt(3);
          }}
          className="absolute  max-sm:top-0 top-6  left-2 rounded-full    max-sm:w-32 max-sm:h-32 bg-blue-500 w-48 h-48  flex items-center justify-center border-b-[12px] border-blue-700"
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
          className="absolute top-6  right-2 rounded-full   max-sm:top-0 max-sm:w-32 max-sm:h-32 bg-orange-500 w-48 h-48  flex items-center justify-center border-b-[12px] border-orange-600"
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
          className="absolute bottom-20 max-sm:bottom-10  left-2/2 rounded-full    max-sm:w-32 max-sm:h-32 bg-red-600    w-48 h-48  flex items-center justify-center border-b-[12px] border-red-800"
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
