import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import BannerImage1 from "../../../images/Banner/Banner.png";
import BannerImage2 from "../../../images/Banner/Banner2.png";
import BannerImage3 from "../../../images/Banner/Banner3.png";
import "./Banner.css";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    adaptiveHeight: true,
    speed: 500,
    arrows: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section id="banner" className=" p-2 mb-5">
      <Container>
        <Slider {...settings}>
          <div className="d-flex  justify-content-center align-items-center flex-wrap my-5 px-3">
            <div className="w-50">
              <p className="d-inline py-2 px-3 rounded-pill banner-sub-text">
                Upcoming Products
              </p>
              <h3 className="my-3">Mackbook Air Pro 2022 Black Edition</h3>
              <p className="mb-3">
                It is one of the most of powerful pc in this year. Here,
                included highest configuration processor and hardware are so
                much powerful.
              </p>
              <button className="button rounded-pill py-1 px-3">
                Know More
                <FontAwesomeIcon className="ms-2" icon={faLongArrowAltRight} />
              </button>
            </div>
            <div className="w-50">
              <img src={BannerImage1} alt="BannerImage" />
            </div>
          </div>
          <div className="d-flex  justify-content-center align-items-center my-5 px-3">
            <div className="w-50">
              <p className="d-inline p-2 px-3 rounded-pill banner-sub-text">
                Launch Products
              </p>
              <h3 className="my-3">
                Xiaomi Mi HSEJO3JY 3.5mm Earphone Basic Matte Black
              </h3>
              <p className="mb-3">
                A earphone is very important for every man. Earphone needed
                anywhere we want to listen music. <br /> Most powerful base in
                this earphone. It has 3.5mm headphone jack. You can get 3 type
                of color, such as black, white, blue.
              </p>
              <button className="button rounded-pill py-1 px-3">
                Know More
                <FontAwesomeIcon className="ms-2" icon={faLongArrowAltRight} />
              </button>
            </div>
            <div className="w-50">
              <img src={BannerImage2} alt="BannerImage" />
            </div>
          </div>
          <div className="d-flex  justify-content-center align-items-center my-5 px-3">
            <div className="w-50">
              <p className="d-inline p-2 px-3 rounded-pill banner-sub-text">
                Release Products
              </p>
              <h3 className="my-3">
                Mi_WiFi Router 4C Global Version 300Mbps 4 Antennas Smart APP
                Control - White
              </h3>
              <p className="mb-3">
                A router is connected to two or more data lines from different
                IP networks. When a data packet comes in on one of the lines,
                the router reads the network address information in the packet
                header to determine the ultimate destination. Then, using
                information in its routing table or routing policy, it directs
                the packet to the next network on its journey.
              </p>
              <button className="button rounded-pill py-1 px-3">
                Know More
                <FontAwesomeIcon className="ms-2" icon={faLongArrowAltRight} />
              </button>
            </div>
            <div className="w-50">
              <img src={BannerImage3} alt="BannerImage" />
            </div>
          </div>
        </Slider>
      </Container>
    </section>
  );
};

export default Banner;
