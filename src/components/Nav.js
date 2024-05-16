import React from "react";
import { useState } from "react";

function Nav() {
  const [menu, setMenu] = useState(false);
  return (
    <div className="outer-container">
      <div className="header">
        <ul>
          <li>Logo</li>
        </ul>
        <ul className={menu ? "open" : ""}>
          <li>Home</li>
          <li>Our Story</li>
          <li>Our Clients</li>
        </ul>
        <div
          onClick={() => {
            setMenu(!menu);
          }}
          className="main"
        >
          <img
            src="https://banner2.cleanpng.com/20180628/zaz/kisspng-computer-icons-hamburger-button-menu-new-menu-5b34724be5a1f0.5796308115301637879406.jpg"
            alt="images"
          />
        </div>
      </div>
    </div>
  );
}

export default Nav;
