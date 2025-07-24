import React from "react";
import Play from "./Game";
import { EconomyProvider } from "./EconomyContext";

function App() {
  return (
    <EconomyProvider>
      <main className="p-8 min-h-screen bg-gradient-to-br from-indigo-100 to-blue-100">
        <h1 className="text-3xl font-bold text-center mb-6 text-indigo-700">
          🏡 Property Economy Manager
        </h1>
        <Play />
      </main>
    </EconomyProvider>
  );
}

export default App;