import React from "react";
import { Container } from "react-bootstrap";
import Title from "../../Shared/Title/Title";
import "./FeaturedProducts.css";
import FeaturedImg1 from "../../../images/Featured/laptop-48x48.png";
import FeaturedImg2 from "../../../images/Featured/desktop-48x48.png";
import FeaturedImg3 from "../../../images/Featured/cpu-48x48.png";
import FeaturedImg4 from "../../../images/Featured/gpu-48x48.png";
import FeaturedImg5 from "../../../images/Featured/SSD-48x48.png";
import FeaturedImg6 from "../../../images/Featured/keyboard-48x48.png";
import FeaturedImg7 from "../../../images/Featured/accessories-48x48.png";
import FeaturedImg8 from "../../../images/Featured/headphone-48x48.png";
import FeaturedImg9 from "../../../images/Featured/webcam-48x48.png";
import FeaturedImg10 from "../../../images/Featured/printer-48x48.png";
import FeaturedImg11 from "../../../images/Featured/photocopier-48x48.png";
import FeaturedImg12 from "../../../images/Featured/projector-48x48.png";
import FeaturedImg13 from "../../../images/Featured/router-48x48.png";
import FeaturedImg14 from "../../../images/Featured/gadget-48x48.png";
import FeaturedImg15 from "../../../images/Featured/smart-watch-48x48.png";
import FeaturedImg16 from "../../../images/Featured/cable-converter-48x48.png";

const FeaturedProducts = () => {
  const titleName = "Featured Products";
  return (
    <section id="products" className="py-5">
      <Container>
        <Title titleName={titleName}></Title>

        <div className="featured-item">
          <div className="shadow-sm rounded-2 p-3 text-center item">
            <img src={FeaturedImg1} alt="Featured images" />
            <h6>All Laptops</h6>
          </div>

          <div className="shadow-sm rounded-2 p-3 text-center item">
            <img src={FeaturedImg2} alt="Featured images" />
            <h6>Desktop</h6>
          </div>

          <div className="shadow-sm rounded-2 p-3 text-center item">
            <img src={FeaturedImg3} alt="Featured images" />
            <h6>Processor</h6>
          </div>

          <div className="shadow-sm rounded-2 p-3 text-center item">
            <img src={FeaturedImg4} alt="Featured images" />
            <h6>Graphics Card</h6>
          </div>

          <div className="shadow-sm rounded-2 p-3 text-center item">
            <img src={FeaturedImg5} alt="Featured images" />
            <h6>SSD</h6>
          </div>

          <div className="shadow-sm rounded-2 p-3 text-center item">
            <img src={FeaturedImg6} alt="Featured images" />
            <h6>Keyboard</h6>
          </div>

          <div className="shadow-sm rounded-2 p-3 text-center item">
            <img src={FeaturedImg7} alt="Featured images" />
            <h6>Mouse</h6>
          </div>

          <div className="shadow-sm rounded-2 p-3 text-center item">
            <img src={FeaturedImg8} alt="Featured images" />
            <h6>Headphone</h6>
          </div>

          <div className="shadow-sm rounded-2 p-3 text-center item">
            <img src={FeaturedImg9} alt="Featured images" />
            <h6>Webcam</h6>
          </div>

          <div className="shadow-sm rounded-2 p-3 text-center item">
            <img src={FeaturedImg10} alt="Featured images" />
            <h6>Printer</h6>
          </div>

          <div className="shadow-sm rounded-2 p-3 text-center item">
            <img src={FeaturedImg11} alt="Featured images" />
            <h6>Photocopier</h6>
          </div>

          <div className="shadow-sm rounded-2 p-3 text-center item">
            <img src={FeaturedImg12} alt="Featured images" />
            <h6>Projector</h6>
          </div>

          <div className="shadow-sm rounded-2 p-3 text-center item">
            <img src={FeaturedImg13} alt="Featured images" />
            <h6>Router</h6>
          </div>

          <div className="shadow-sm rounded-2 p-3 text-center item">
            <img src={FeaturedImg14} alt="Featured images" />
            <h6>Gadget</h6>
          </div>

          <div className="shadow-sm rounded-2 p-3 text-center item">
            <img src={FeaturedImg15} alt="Featured images" />
            <h6>Smart Watch</h6>
          </div>

          <div className="shadow-sm rounded-2 p-3 text-center item item">
            <img src={FeaturedImg16} alt="Featured images" />
            <h6>Cables</h6>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProducts;
