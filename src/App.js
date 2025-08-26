// src/App.js
import React, { useState } from "react";
import { Box } from "@mui/material";
import Home from "./pages/Index";
import FlashScreen from "./components/FlashScreen";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <FlashScreen onFinish={() => setLoading(false)} />
      ) : (
        <Box className="App">
          {/* Bubble Background */}
          <Box className="bubbles">
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i}></span>
            ))}
          </Box>

          {/* Page Content */}
          <Home />
        </Box>
      )}
    </>
  );
}

export default App;
