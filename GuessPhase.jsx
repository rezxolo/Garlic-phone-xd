export default function GuessPhase({ guess, setGuess, onSubmit }) {
  return (
    <div className="text-center p-10">
      <h2 className="text-4xl font-bold mb-4">Guess what this is!</h2>
      <div className="bg-white w-96 h-96 rounded-xl mx-auto mb-4 shadow-md"></div>
      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Your guess"
        className="rounded px-4 py-2 mb-4 text-black"
      />
      <br />
      <button
        onClick={onSubmit}
        className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-xl"
      >
        Submit Guess
      </button>
    </div>
  );
}
