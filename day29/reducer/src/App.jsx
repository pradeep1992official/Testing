import { useState } from "react";
import ToyBoxWOReducer from "./ToyBoxWOReducer";
import Withreducer from "./Withreducer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    // <div >
    //   {/* <ToyBoxWOReducer></ToyBoxWOReducer>
    //   <Withreducer></Withreducer> */}

    // </div>
    <Router>
      <nav className="bg-yellow-400 text-white p-4">
        <ul className="flex space-x-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/ToyBoxWOReducer">ToyBoxWOReducer</Link>
          </li>
          <li>
            <Link to="/Withreducer">Withreducer</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<ToyBoxWOReducer></ToyBoxWOReducer>}></Route>
        <Route path="/ToyBoxWOReducer" element={<ToyBoxWOReducer></ToyBoxWOReducer>}></Route>
        <Route path="/Withreducer" element={<Withreducer></Withreducer>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
