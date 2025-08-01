export default function RevealPhase({ prompt, guess }) {
  return (
    <div className="text-center p-10">
      <h2 className="text-4xl font-bold mb-4">Final Reveal 🎉</h2>
      <p className="text-xl mb-2">Original Prompt: {prompt}</p>
      <div className="bg-white w-96 h-96 rounded-xl mx-auto mb-4 shadow-md"></div>
      <p className="text-xl">Guessed: {guess}</p>
    </div>
  );
}
