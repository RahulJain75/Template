import React from "react";
import Image from "react-bootstrap/Image";

function Marketing() {
  return (
    <div className="m mt-5 bg-warning d-flex ">
      <div className="m_left">
        LET'S TAKE
        <br />
        YOURBRAND
        <br />
        ON A JOY RIDE
        <br />
        WITH US!
      </div>
      <div className="m_right">
        <Image
          src="https://agicomunicacao.com.br/wp-content/themes/agi2024/images/foto.png"
          fluid
        />
      </div>
    </div>
  );
}

export default Marketing;
