import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [uuid, setUuid] = useState(crypto.randomUUID());
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("text-green-400");

  function handleGenerateUUID() {
    setUuid(crypto.randomUUID());
    setMessageColor("bg-orange-400");
    setMessage("New UUID Generated");
  }

  function handleCopyID() {
    navigator.clipboard.writeText(uuid);
    setMessageColor("bg-green-400");
    setMessage("UUID Copied to Clipboard");
  }

  useEffect(() => {
    if (message.length > 0) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [message]);

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center p-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">Random UUID Generator</h1>
        </div>
        <div className="flex items-center space-x-4 justify-center flex-col gap-8">
          <div className="flex items-center space-x-2 border-2 border-white p-2 rounded-md">
            <span className="text-xl">{uuid}</span>
          </div>

          <div className="flex justify-center items-center gap-4 text-sm">
            <button
              className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
              onClick={handleGenerateUUID}
            >
              Generate UUID
            </button>
            <button
              className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
              onClick={handleCopyID}
              onFocus={(e) => {
                e.target.style.transform = "scale(1.05)";
              }}
            >
              Copy
            </button>
          </div>

          {message.length > 0 && (
            <div
              className={`fixed bottom-4 right-4 px-4 py-2 ${messageColor} rounded-md`}
            >
              <span className="text-black">{message}</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
