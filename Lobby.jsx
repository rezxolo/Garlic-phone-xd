export default function Lobby({ onStart }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <h1 className="text-6xl font-bold">Garlic Phone 🎨</h1>
      <p className="text-xl">Join a game or create your own!</p>
      <div className="flex gap-4">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-2xl shadow-xl">
          Join Game
        </button>
        <button
          className="bg-green-400 hover:bg-green-500 text-black font-bold py-2 px-6 rounded-2xl shadow-xl"
          onClick={onStart}
        >
          Create Game
        </button>
      </div>
    </div>
  );
}
