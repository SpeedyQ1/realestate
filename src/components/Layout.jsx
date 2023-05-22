import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div id="container">
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/properties"}>Properties</Link>
      </nav>
     
        <Outlet />
     

      <footer>

      </footer>
    </div>
  );
}

export default Layout;
