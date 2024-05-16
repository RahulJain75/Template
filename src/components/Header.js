import React from "react";

function Header() {
  return (
    <div className="container-fluid bg-danger headContainer">
      <div className="innerHeaderleft col-md-6 pt-5">
        <div>
          <div className="upper_text">
            WE UNITE <br /> FRESH IDEAS
          </div>
          <div className="lower_sub_text">
            STORIES <br />
            TALENTS
          </div>
        </div>
      </div>
      <div className="innerHeaderright col-md-6  bg-light">
        <img
          className="image"
          src="https://www.thepocketdiary.com/wp-content/uploads/2023/12/everyone-wants-to-be-a-content-creator.png"
        />
      </div>
    </div>
  );
}

export default Header;
