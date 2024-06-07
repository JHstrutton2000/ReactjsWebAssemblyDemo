import React, { useState, useEffect } from "react";
import createModule from "./main.mjs";
import { makeAlert } from "./Library.js"

function App() {

  createModule().then((Module) => {
        
    Module.cwrap('main')
    Module.ccall('main');
  });

  return (
    <div className="App">
      <p>Pls work</p>
      {/* {value} */}
    </div>
  );
}

export default App;
