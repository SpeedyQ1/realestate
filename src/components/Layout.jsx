import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div id="container">
      <nav>
       
        <Link className="logo ,link" to={"/"}></Link>
       
        <div id="link-section">
        <Link className= "link" to={"/"}>Home</Link>
        <Link className="link"to={"/properties"}>Properties</Link>
        </div>
      </nav>
     
        <Outlet />
     

      <footer>

      </footer>
    </div>
  );
}

export default Layout;
