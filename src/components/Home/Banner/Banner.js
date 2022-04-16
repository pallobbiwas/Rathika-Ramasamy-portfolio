import React from "react";
import { Carousel } from "react-bootstrap";
import imge1 from '../../images/banner/banner1.png';
import imge2 from '../../images/banner/banner2.png';
import imge3 from '../../images/banner/banner3.png';

const Banner = () => {
  return (
    <div className="mb-5">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imge1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imge2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imge3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
