import React, { useState, useEffect } from "react";
import createModule from "./main.mjs";

function App() {
  const [value, setValue] = useState("blank");
  useEffect(
    () => {
      createModule().then((Module) => {

        Module.cwrap('main', 'number', ['number'])

        setValue(Module.ccall('main', 'string', null, null));

      });
    },
    []
  );

  return (
    <div className="App">
      <p>Pls work</p>
      {value}
    </div>
  );
}

export default App;
