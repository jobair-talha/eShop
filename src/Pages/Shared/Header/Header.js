import React from "react";
import { Button, Container, Form, FormControl, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../../images/Logo/logo.png";
import "./Header.css";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const { user, admin, logout } = useAuth();
  return (
    <Navbar className="nav-bg" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={Logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="mx-auto d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2 field"
              aria-label="Search"
            />
            <Button variant="outline-danger" className="button">
              Search
            </Button>
          </Form>
          <Link className="mx-2" to="/products">
            Products
          </Link>
          <Link className="mx-2" to="/order">
            My Order
          </Link>
          {admin && <Link to="/dashboard">Dashboard</Link>}
          {user.email && (
            <button onClick={logout} className="btn ms-3 btn-border">
              Logout
            </button>
          )}
          {!user.email && (
            <div className="d-flex align-items-center mx-2 mouse">
              <Link to="/login">
                <FontAwesomeIcon icon={faUser} />
              </Link>
              <div className="ms-3">
                <h5>Account</h5>
                <p>
                  <Link to="/register">Register</Link> or{" "}
                  <Link to="/login">Login</Link>
                </p>
              </div>
            </div>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
