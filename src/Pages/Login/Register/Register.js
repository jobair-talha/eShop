import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Register.css";

const Register = () => {
  const { registerUser } = useAuth();
  const navigate = useNavigate();

  const [userData, setUserData] = useState();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newUserData = { ...userData };
    newUserData[field] = value;
    setUserData(newUserData);
  };

  const handleOnSubmit = (e) => {
    registerUser(userData.email, userData.password, userData.name, navigate);
    e.preventDefault();
  };

  return (
    <section id="register">
      <Container>
        <div className="main">
          <div className="side d-flex flex-column justify-content-center">
            <h2 className="pb-3">Wellcome Back</h2>
            <h6 className="pb-3">
              Create an Account Please Signup with your <br /> Personal correct
              info
            </h6>
            <Link to="/login">
              <button className="button rounded-pill py-1 px-3">SIGN IN</button>
            </Link>
          </div>
          <div className="py-5 text-center">
            <h2 className="mt-5 mb-4">Create Account</h2>

            <Form onSubmit={handleOnSubmit} className="w-75 mx-auto">
              <Form.Control
                className="mb-3"
                type="text"
                name="name"
                onBlur={handleOnBlur}
                placeholder="Your Name"
                required
              />
              <Form.Control
                className="mb-3"
                type="email"
                name="email"
                onBlur={handleOnBlur}
                placeholder="Enter email"
                required
              />
              <Form.Control
                className="mb-3"
                type="password"
                name="password"
                onBlur={handleOnBlur}
                placeholder="Password"
                required
              />
              <Button className="btn-bg" type="submit">
                SIGN UP
              </Button>
            </Form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Register;
