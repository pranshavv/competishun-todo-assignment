import React from "react";
import { useContext } from "react";
import { Outlet, NavLink } from "react-router-dom";
import TokenContext from "../../context/TokenContext.js";

function Header() {
  const token = localStorage.getItem("authToken");
  const { user } = useContext(TokenContext);
  console.log("user", user);
  const logout = () => {
    localStorage.removeItem("authToken");
    window.location.href = "/login";
  };

  return (
    <div>
      <nav className="header bg-[#10083C] flex justify-between items-center px-20 min-h-[100px]">
        <div className="text-[#ffffff] w-[200px] text-center text-3xl ml-24">
          <NavLink to="/">Todo App</NavLink>
        </div>
        <div className="flex w-[1000px]">
          {token ? (
            <div className="flex w-[90%]  justify-between">
              <p className="mx-4 text-[white] text-2xl">
                Welcome,{" "}
                <span className=" text-2xl text-[white] capitalize ">
                  {user.name}
                </span>
              </p>
              <button onClick={logout} className="logout">
                Logout
              </button>
            </div>
          ) : (
            <ul className="flex justify-end gap-3 w-3/4 pr-6 text-[white]">
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
            </ul>
          )}
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Header;
