import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //run once when the app components loads
    onAuthStateChanged(auth, (authUser) => {
      console.log("The user is ", authUser);
      if(authUser) {
        //the user just logged in
        dispatch({
          type:'SET_USER',
          user: authUser
        })
      }
      else {
        // the user is logged out
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    });
  }, []);
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
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
