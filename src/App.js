import React, { useState, useEffect } from "react";
import createModule from "./main.mjs";
import "./Library.js"

function App() {
  createModule().then((Module) => {
    // Module.cwrap('main');
    // Module.ccall('main');
  });

  return (
    <div>
      
    </div>
  )
}

export default App;
