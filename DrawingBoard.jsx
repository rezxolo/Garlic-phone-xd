export default function DrawingBoard({ onDone, prompt }) {
  return (
    <div className="p-10 text-center">
      <h2 className="text-4xl font-bold mb-4">Draw the Prompt!</h2>
      <p className="text-lg mb-4">{prompt}</p>
      <div className="bg-white rounded-xl mx-auto w-96 h-96 mb-4 shadow-md"></div>
      <button
        onClick={onDone}
        className="mt-6 bg-blue-400 hover:bg-blue-500 text-white px-6 py-2 rounded-xl"
      >
        Done
      </button>
    </div>
  );
}
