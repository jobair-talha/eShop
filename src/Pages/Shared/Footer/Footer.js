import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import PaymentImg from "../../../images/Footer/payment.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="pt-5">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={3} lg={3}>
            <h3>Location</h3>
            <div className="d-inline-block border py-2 px-3 rounded-pill mt-3">
              <div className="d-flex align-items-center">
                <div>
                  <FontAwesomeIcon icon={faPhoneAlt} />
                </div>
                <div className="ms-2 border-start ps-2">
                  <p className="mb-0">9AM - 5PM</p>
                  <h6>+8801724-721383</h6>
                </div>
              </div>
            </div>
            <div className="d-inline-block border py-2 px-3 rounded-pill mt-3">
              <div className="d-flex align-items-center">
                <div>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <div className="ms-2 border-start ps-2">
                  <p className="mb-0">Store Locator</p>
                  <h6>Our Store Location</h6>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <h3>About Us</h3>
            <Row className="mt-3">
              <Col xs={12} sm={12} md={6} lg={4}>
                <ul>
                  <li>
                    <Link to="/emi">EMI Terms</Link>
                  </li>
                  <li>
                    <Link to="/privacy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="career">Career</Link>
                  </li>
                  <li>
                    <Link to="blog">Blog</Link>
                  </li>
                </ul>
              </Col>

              <Col xs={12} sm={12} md={6} lg={4}>
                <ul>
                  <li>
                    <Link to="about-us">About Us</Link>
                  </li>
                  <li>
                    <Link to="/condition">Terms and Conditions</Link>
                  </li>
                  <li>
                    <Link to="/policy">Star Point Policy</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </Col>

              <Col xs={12} sm={12} md={6} lg={4}>
                <ul>
                  <li>
                    <Link to="'delivery"> Online Delivery</Link>
                  </li>
                  <li>
                    <Link to="'policy"> Refund and Return Policy</Link>
                  </li>
                  <li>
                    <Link to="/desktop">Corsair iCUE PC</Link>
                  </li>
                  <li>
                    <Link to="brands"> Brands</Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={12} md={3} lg={3}>
            <h3>Stay Connected</h3>
            <h6 className="mt-3">eShop Online LTD.</h6>
            <p className="my-2">
              t-soft IT, Shadullapur Polashbari Road, Gaibandha, Dhaka.
            </p>
            <h6>Email:</h6>
            <p>mdshekhtalha@gmail.com</p>
          </Col>
        </Row>
      </Container>
      <div className="border-top mt-5 py-3">
        <Container>
          <div className="d-flex  justify-content-evenly">
            <div>
              <Link to="/privacy" className="me-2">
                Privacy & Policy
              </Link>
              <Link to="/condition">Terms & Condition</Link>
            </div>
            <div>
              <img src={PaymentImg} alt="" />
            </div>
            <div>
              <p className="mb-0 text-light">@All design by Talha</p>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
