import React from "react";
import TaskIndicator from "./TaskIndicator";
import CreateTask from "./createTask/CreateTask";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-between mx-auto w-4/5">
        <CreateTask />
        <div className="task-container w-auto mx-5 md:w-[500px] mt-3 ">
          <div className="indicator ">
            <TaskIndicator />
          </div>
          <div className="outlet max-h-[400px] overflow-y-scroll">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
