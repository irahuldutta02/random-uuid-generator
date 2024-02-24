import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./App.css";

function App() {
  const [uuid, setUuid] = useState(crypto.randomUUID());

  function generateNewUUID() {
    setUuid(crypto.randomUUID());
  }
  const notify = (message) =>
    toast.success(message, {
      duration: 1000,
      position: "bottom-center",
    });

  function handleCopyID() {
    toast.dismiss();
    generateNewUUID();
    navigator.clipboard.writeText(uuid);
    notify("UUID copied to clipboard");
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen text-white text-center p-4 w-full">
        <div className="flex items-center space-x-4 justify-center flex-col gap-8 bg-glass p-4 border-2 border-white rounded-lg w-full max-w-lg ">
          <div className="flex justify-center items-center text bg-center">
            <h1 className="text-4xl font-bold pb-8">UUID Generator</h1>
          </div>

          <div className="flex items-center space-x-2 border-2 border-white p-2 rounded-md">
            <span className="text-xl">{uuid}</span>
          </div>

          <div className="flex justify-center items-center gap-4 text-sm">
            <button
              className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
              onClick={handleCopyID}
              onFocus={(e) => {
                e.target.style.transform = "scale(1.05)";
              }}
            >
              Copy and Regenerate
            </button>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
}

export default App;
