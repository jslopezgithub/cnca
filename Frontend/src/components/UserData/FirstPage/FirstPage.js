import React from "react";
import Calender from "./Calender";
import Days from "./Days";
import TotalHours from "./TotalHours";
import TotalTime from "./TotalTime";
import UserName from "./UserName";
//import Columns from "./columns";
import "./FirstPage.css";

export default function FirstPage() {
  return (
    <div className="FirstPage">
      <Calender />
      <Days />
      <TotalHours />
      <TotalTime>Hello from total time</TotalTime>
      <UserName />
      {/* // <Columns /> */}
      First Page
    </div>
  );
}
