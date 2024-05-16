import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
function Ourstory1() {
  return (
    <Container fluid>
      <Row>
        <Col md={4}>
          <center>
            <div className="os_text fw-bold text-danger">
              OUR <br />
              STORY
            </div>
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ68bqmJ8HwAf-rjm_8NqSEQ1yfc6cldcUakd1N2h2ArA&s"
              fluid
            />
            ;
          </center>
        </Col>
        <Col md={6}>
          <div className="cs-head fw-bold">KNIGHT OWL MEDIA</div>
          KnightOwl Media unites fresh ideas, talent and stories to bring out
          result driven solutions! We are a result-driven influencer marketing
          and talent management organization that elevates businesses to scale
          up their brand through bold strategic marketing and brand initiatives
          We develop powerful campaigns and bring ideas to life and work with
          several leading industry giants in the gaming, entertainment and
          lifestyle space!
          <div className="cs-head fw-bold mt-5">KNIGHT OWL MEDIA</div>
          KnightOwl Media unites fresh ideas, talent and stories to bring out
          result driven solutions! We are a result-driven influencer marketing
          and talent management organization that elevates businesses to scale
          up their brand through bold strategic marketing and brand initiatives
          We develop powerful campaigns and bring ideas to life and work with
          several leading industry giants in the gaming, entertainment and
          lifestyle space!
          <br />
          <button className=" read_more mt-4 p-2 ps-4 pe-4">Read More</button>
        </Col>
      </Row>
    </Container>
  );
}

export default Ourstory1;
