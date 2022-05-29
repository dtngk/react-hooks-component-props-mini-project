import React from "react";

function Header(prop) {
   // console.log(prop)
    return (
      <div className="Header">
        <header>
          <h1>
            {prop.name}
          </h1>
        </header>
      </div>
    );
  }
  
  export default Header;
  