import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  // superLargeDesktop: {
  //   // the naming can be any, depends on you.
  //   breakpoint: { max: 4000, min: 3000 },
  //   items: 5
  // },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};
function Ourcreators1() {
  return (
    <Row>
      <Col md={4}>
        <div>
          <div className="creator_head">Our</div>
          <div className="creator_head">Creators</div>
          <div className="creator_head_text">
            We're passionate about providing our clients with incredible service
            and exceptional results, driven by experienced talent agents and
            social media experts entirely focused on your success.
          </div>
          <button className=" read_more view_all mt-4 p-2 ps-4 pe-4">
            View All
          </button>
        </div>
      </Col>
      <Col md={8}>
        <Carousel className="oc" responsive={responsive}>
          <div>
            <div className="creator-card">
              <div className="logo text-light">
                <img className="logo-img " src="images/icon.svg" />
                100 M Followers
                <img className="logo-img ms-3" src="images/youtube.svg" />
                100 M Subscribers
              </div>
            </div>
          </div>
          <div>
            <div className="creator-card">
              <div className="logo text-light">
                <img className="logo-img " src="images/icon.svg" />
                100 M Followers
                <img className="logo-img ms-3" src="images/youtube.svg" />
                100 M Subscribers
              </div>
            </div>
          </div>
          <div>
            <div className="creator-card">
              <div className="logo text-light">
                <img className="logo-img " src="images/icon.svg" />
                100 M Followers
                <img className="logo-img ms-3" src="images/youtube.svg" />
                100 M Subscribers
              </div>
            </div>
          </div>
          <div>
            <div className="creator-card">
              <div className="logo text-light">
                <img className="logo-img " src="images/icon.svg" />
                100 M Followers
                <img className="logo-img ms-3" src="images/youtube.svg" />
                100 M Subscribers
              </div>
            </div>
          </div>
        </Carousel>
      </Col>
    </Row>
  );
}

export default Ourcreators1;
