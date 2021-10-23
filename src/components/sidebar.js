import React, { useState } from "react";

const SideBar = (props) => {
  const [isshow, setIsshow] = useState(true);
  function openNav(bnt) {
    document.getElementById("mySidenav").hidden = false;
    setIsshow(false);
  }

  function closeNav() {
    document.getElementById("mySidenav").hidden = true;
    setIsshow(true);
  }
  return (
    <div>
      <nav className="flex">
        <div className="px-4">
          {isshow && (
            <span
              style={{ fontSize: "30px", cursor: "pointer" }}
              onClick={(e) => openNav(this)}
            >
              &#9776;
            </span>
          )}
          <div
            id="mySidenav"
            className="sidenav"
            hidden={true}
            style={{
              // position: "fixed",
              width: "250px",
              zIndex: "1",
              top: "0",
              left: "0",
              backgroundColor: "#111",
              overflowX: "hidden",
              transition: "0.5s"
              // paddingTop: "60px",
            }}
          >
            <a
              style={{
                padding: "8px 8px 8px 32px",
                textDecoration: "none",
                fontSize: "25px",
                color: "#818181",
                display: "block",
                transition: "0.3s",
                position: "absolute"
              }}
              className="closebtn"
              onClick={(e) => closeNav()}
            >
              &times;
            </a>
            <a
              href="#"
              style={{
                padding: "8px 8px 8px 32px",
                textDecoration: "none",
                fontSize: "25px",
                color: "#818181",
                display: "block",
                transition: "0.3s"
              }}
            >
              About
            </a>
            <a
              href="#"
              style={{
                padding: "8px 8px 8px 32px",
                textDecoration: "none",
                fontSize: "25px",
                color: "#818181",
                display: "block",
                transition: "0.3s"
              }}
            >
              Clients
            </a>
            <a
              href="#"
              style={{
                padding: "8px 8px 8px 32px",
                textDecoration: "none",
                fontSize: "25px",
                color: "#818181",
                display: "block",
                transition: "0.3s"
              }}
            >
              Contact
            </a>
          </div>
        </div>
        <div className="text-left">
          <div>{props.children}</div>
        </div>
      </nav>
    </div>
  );
};
export default SideBar;
