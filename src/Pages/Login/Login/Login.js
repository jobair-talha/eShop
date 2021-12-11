import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Github from "../../../images/Icon/github.png";
import Google from "../../../images/Icon/google.png";
import "./Login.css";

const Login = () => {
  const { signInWithGoogle, signInWithGithub, loginUser } = useAuth();
  const [loginData, setLoginData] = useState();

  const location = useLocation();
  const navigate = useNavigate();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleOnSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, navigate);
    e.preventDefault();
  };

  return (
    <section id="login">
      <Container>
        <div className="main">
          <div className="side  d-flex flex-column justify-content-center">
            <h2 className="pb-3">Login Here</h2>
            <h6 className="pb-3">
              To keep connected Please Login with your <br /> Personal Info
            </h6>
            <Link to="/register">
              <button className="button rounded-pill py-1 px-3">SIGN UP</button>
            </Link>
          </div>
          <div className="py-5 text-center">
            <h2 className="mt-5 mb-4">Login</h2>
            <div className="d-flex justify-content-center mb-4">
              <div
                onClick={() => signInWithGoogle(location, navigate)}
                className="icon"
              >
                <img className="w-100" src={Google} alt="" />
              </div>
              <div
                onClick={() => signInWithGithub(location, navigate)}
                className="icon"
              >
                <img className="w-100" src={Github} alt="facebook" />
              </div>
            </div>

            <Form onSubmit={handleOnSubmit} className="w-75 mx-auto">
              <Form.Control
                className="mb-3"
                type="email"
                name="email"
                onBlur={handleOnBlur}
                placeholder="Enter email"
              />
              <Form.Control
                className="mb-3"
                type="password"
                name="password"
                onBlur={handleOnBlur}
                placeholder="Password"
              />
              <Button className="btn-bg" type="submit">
                LOG IN
              </Button>
            </Form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Login;
