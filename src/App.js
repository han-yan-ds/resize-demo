import React from "react";
import "./App.css";
import { useRef } from "react";
import useResize from "./hooks/useResize";

import Chart from "./Chart";

function App() {
  const ref = useRef(null);
  const { clientWidth, clientHeight, offsetWidth, offsetHeight } = useResize(ref);

  return (
    <div className="App" ref={ref}>
      {`Window Width: ${clientWidth}`}<br/>{`Height X 30%: ${clientHeight}`}

      {/* <Chart /> */}
    </div>
  );
}

export default App;
