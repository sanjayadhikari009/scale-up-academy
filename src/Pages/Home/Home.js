// import { Link } from "react-router-dom"
import {
  NavBar,
  Footer,
  GetReady,
  Blog,
  CoursePage,
  Review,
  Landing,
} from "../../Components/ExportComponents";
import "./Home.css";
// import { useEffect, useRef, useState } from "react"
import { useState, useEffect } from "react";

const Home = ({ fullNav }) => {
  document.title = "ScaleUp Academy | Home";

  return (
    <>
      <NavBar fullNav={fullNav} />
      <div className="homePage">
        <Landing />

        {/* Courses  */}
        <CoursePage />

        <GetReady clean={false} />
        <Blog />
        <GetReady clean={true} logo={true} />
        <Review />
        <Footer />
      </div>
    </>
  );
};
export default Home;
