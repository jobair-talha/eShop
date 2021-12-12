import React from "react";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav>
      <Container>
        <Nav
          className="my-2 my-lg-0 nav-item"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <NavDropdown title="Desktop" id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to="/desktops">
              All Desktop
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/desktops/gaming-pc">
              Gaming Desktop
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/desktops/apple-pc">
              Apple Pc
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/desktops/budge-pc">
              Budge Pc
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Laptop" id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to="/laptops">
              All Laptop
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/laptops/hp-laptop">
              HP
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/laptops/asus-laptop">
              Asus
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/laptops/acer-laptop">
              Acer
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/laptops/apple-laptop">
              Apple
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/laptops/microsoft-laptop">
              Microsoft
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Components" id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to="/components">
              All
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/components/processor">
              Processor
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/components/cpu-cooler">
              CPU Cooler
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/components/motherboard">
              Motherboard
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/components/ssd">
              SSD
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/components/graphic-card">
              Graphic Card
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/components/pendrive">
              Pen Drive
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/components/ram">
              RAM
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/components/hard-disk">
              Hard Disk
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="UPS" id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to="/ups">
              All
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/ups/maxGreen">
              MaxGreen
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/ups/technoWare">
              TechnoWare
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/ups/prolink">
              Prolink
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/ups/apollo">
              Apollo
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Monitor" id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to="/desktops">
              Dell
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/desktops/gaming-pc">
              HP
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/desktops/apple-pc">
              Prolink
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/desktops/budge-pc">
              Apollo
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Equipment" id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to="/equipments">
              All
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/equipments/gaming-pc">
              Projector
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/equipments/apple-pc">
              Printer
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/equipments/budge-pc">
              Scanner
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/equipments/budge-pc">
              Ribbon
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Tablet" id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to="/tablets">
              All Tablets
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/tablets/samsung">
              Samsung
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/tablets/iTab">
              iTab
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/tablets/huawei">
              Huawei
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Earphone" id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to="/earphones">
              Earphones
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/earphones/UiiSii">
              UiiSii
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/earphones/qkz">
              QKZ
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/earphones/lenovo">
              Lenovo
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Camera" id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to="/camera">
              All
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/camera/security-camera">
              Security Camera
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/camera/dslr-camera">
              DSLR camera
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="TV" id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to="/all-tv">
              All TV
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/tv/smart">
              Smart TV
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/tv/4k">
              4K TV
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/tv/">
              LED
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="AC" id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to="/ac">
              All Desktop
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/ac/general">
              General
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/ac/midea">
              Midea
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/ac/elite">
              Elite
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Accessories" id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to="/accessories">
              Keyboard
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/accessories/mouse">
              Mouse
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/accessories/mouse-pad">
              Mouse Pad
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/accessories/headphone">
              HeadPhone
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/accessories/earphone">
              Ear phone
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/accessories/memory-card">
              Memory card
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/accessories/power-bank">
              Power Bank
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/accessories/modem">
              Modem
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/accessories/speaker">
              Speaker
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Gaming" id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to="/gaming">
              Gaming
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/gaming/gaming-chair">
              Gaming Chair
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/gaming/gaming-pc">
              Gaming PC
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/gaming/gaming-desk">
              Gaming Desk
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </nav>
  );
};

export default Navigation;
