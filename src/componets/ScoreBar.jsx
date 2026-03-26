function ScoreBar({ score }) {
  return (
    <>
      <div className="w-[700px]  h-36 border-2  rounded-lg border-white/30  flex items-center justify-between p-4">
        <div className="text-white font-bold text-4xl">
          <h1>ROCK</h1>
          <h1>PAPER</h1>
          <h1>SCISSORS</h1>
        </div>
        <div className="flex flex-col items-center justify-center bg-white w-32 h-full rounded-lg">
          <span className="uppercase text-blue-700">score</span>
          <span className="text-6xl font-bold text-gray-600">{score}</span>
        </div>
      </div>
    </>
  );
}

export default ScoreBar;
