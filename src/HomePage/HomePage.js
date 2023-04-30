import Navbarcop from "../NavComponent/Navbarcop";
import RightSide from "../LnadingPage/RightSide";
import LeftSideBar from "../LnadingPage/LeftSideBar";
import React from "react";

const HomePage = () => {
  return (
    <div className="Home">
      <Navbarcop />
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-3 ">
          <LeftSideBar />
          </div>
          <div className="col-xs-12 col-sm-9 ">
          <RightSide />
          </div>
        </div>
      </div>
    
    
    </div>
  );
};

export default HomePage;
