import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Checkout from "./Checkout";
function App() {
  return (
    <div className="app">
      
      <Router>
        <Routes>
          <Route path="/checkout" element={<><Header/><Checkout /></>} />
          <Route path="/" element={<><Header/><Home /></>} />
        </Routes>
      </Router>
    </div>

    /* ---->can be implemented like below as well */
    //    <div className="app">
    //    <Router>
    //      <Routes>
    //        <Route
    //          path="/checkout"
    //          element={
    //            <>
    //              <Header />
    //              <Checkout/>
    //            </>
    //          }
    //        />
    //        <Route
    //          path="/"
    //          element={
    //            <>
    //              <Header />
    //              <Home />
    //            </>
    //          }
    //        />
    //      </Routes>
    //    </Router>
    //  </div>
  );
}
export default App;
