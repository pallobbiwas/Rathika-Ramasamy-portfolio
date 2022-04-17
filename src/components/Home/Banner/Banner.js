import React from "react";
import { Carousel } from "react-bootstrap";
import imge1 from "../../images/banner/banner1.png";
import imge2 from "../../images/banner/banner2.png";
import imge3 from "../../images/banner/banner3.png";

const Banner = () => {
  return (
    <div className="mb-5">
      <div className="row d-flex align-items-center">
        <div className="col-md-8">
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={imge1} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={imge2} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={imge3} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col-md-4">
          <h2>About photography</h2>
          <hr />
          <p>We create beautiful memories for this unique and special moment. We print your photos in high quality Canvas and Glass Wall Art. Fine Art Photography. Studio Photography. Family Portrait. Maternity Photography. Styles: Maternity Photography, Fine Art Photography, Fifteen Years Photography.</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
