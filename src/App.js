import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbarcop from "./NavComponent/Navbarcop";
import HomePage from "./HomePage/HomePage";
// import RightSide from "./LnadingPage/RightSide";
import LeftSideBar from "./LnadingPage/LeftSideBar";
import Rightallcat from "./LnadingPage/Rightallcat";
import Rightallpost from "./LnadingPage/Rightallpost";
import Rightallprod from "./LnadingPage/Rightallprod";
import View from "../src/ModifyButton/View";
import Upddate from "../src/ModifyButton/Upddate";
import Add from "../src/ModifyButton/Add";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomePage />
            </>
          }
        />
        <Route
          path="/projects"
          element={
            <>
              {" "}
              <Navbarcop />{" "}
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              {" "}
              <Navbarcop />{" "}
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              {" "}
              <Navbarcop />{" "}
            </>
          }
        />

        <Route
          path="/allcategory"
          element={
            <>
              {" "}
              <Navbarcop />{" "}
              <div className="container-fluid">
                <div className="row">
                  <div className="col-xs-12 col-sm-3 ">
                    <LeftSideBar />
                  </div>
                  <div className="col-xs-12 col-sm-9 ">
                    <Rightallcat />
                  </div>
                </div>
              </div>
            </>
          }
        />
        <Route
          path="/allpost"
          element={
            <>
              {" "}
              <Navbarcop />{" "}
              <div className="container-fluid">
                <div className="row">
                  <div className="col-xs-12 col-sm-3 ">
                    <LeftSideBar />
                  </div>
                  <div className="col-xs-12 col-sm-9 ">
                    <Rightallpost />
                  </div>
                </div>
              </div>
            </>
          }
        />
        <Route
          path="/allproduct"
          element={
            <>
          
              <Navbarcop />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-xs-12 col-sm-3 ">
                    <LeftSideBar />
                  </div>
                  <div className="col-xs-12 col-sm-9 ">
                    <Rightallprod />
                  </div>
                </div>
              </div>
            </>
          }
        />
        
        <Route
          path="/allproduct/:proid"
          element={
            <>
              {" "}
              <Navbarcop />{" "}
              <div className="container-fluid">
                <div className="row">
                  <div className="col-xs-12 col-sm-3 ">
                    <LeftSideBar />
                  </div>
                  <div className="col-xs-12 col-sm-9 ">
                    <View />
                  </div>
                </div>
              </div>
            </>
          }
        />
        <Route
          path="/allproduct/update"
          element={
            <>
              {" "}
              <Navbarcop />{" "}
              <div className="container-fluid">
                <div className="row">
                  <div className="col-xs-12 col-sm-3 ">
                    <LeftSideBar />
                  </div>
                  <div className="col-xs-12 col-sm-9 ">
                    <Upddate />
                  </div>
                </div>
              </div>
            </>
          }
        />
        <Route
          path="/allproduct/add"
          element={
            <>
              {" "}
              <Navbarcop />{" "}
              <div className="container-fluid">
                <div className="row">
                  <div className="col-xs-12 col-sm-3 ">
                    <LeftSideBar />
                  </div>
                  <div className="col-xs-12 col-sm-9 ">
                    <Add />
                  </div>
                </div>
              </div>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
