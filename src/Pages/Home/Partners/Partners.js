import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";
import PartnerImg1 from "../../../images/Partners/3docean.png";
import PartnerImg2 from "../../../images/Partners/codecanyon.png";
import PartnerImg3 from "../../../images/Partners/Envato.png";
import PartnerImg4 from "../../../images/Partners/Graphic-River.png";
import PartnerImg5 from "../../../images/Partners/photodune.png";
import PartnerImg6 from "../../../images/Partners/theneforst.png";
import PartnerImg7 from "../../../images/Partners/videohive.png";
import "./Partners.css";
import Title from "../../Shared/Title/Title";

const Partners = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 6000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  const titleName = "Partners Program";

  return (
    <section id="partners" className="py-5">
      <Container>
        <Title titleName={titleName}></Title>
        <Slider {...settings}>
          <div>
            <img src={PartnerImg1} alt="Partner images" />
          </div>
          <div>
            <img src={PartnerImg2} alt="Partner images" />
          </div>
          <div>
            <img src={PartnerImg3} alt="Partner images" />
          </div>
          <div>
            <img src={PartnerImg4} alt="Partner images" />
          </div>
          <div>
            <img src={PartnerImg5} alt="Partner images" />
          </div>
          <div>
            <img src={PartnerImg6} alt="Partner images" />
          </div>
          <div>
            <img src={PartnerImg7} alt="Partner images" />
          </div>
        </Slider>
      </Container>
    </section>
  );
};

export default Partners;
