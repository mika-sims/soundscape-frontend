import React, { useState } from "react";

import appStyles from "../../App.module.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Alert from "react-bootstrap/Alert";
import { Link, useNavigate } from "react-router-dom";
import formImg from "../../assets/images/form-img.svg";
import axios from "axios";

const SignUpForm = () => {
  const [signUpData, setSignUpData] = useState({
    username: "",
    password1: "",
    password2: "",
  });
  const [errors, setErrors] = useState({});
  const { username, password1, password2 } = signUpData;
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/dj-rest-auth/registration/", signUpData);
      navigate("/signin");
    } catch (error) {
      setErrors(error.response?.data);
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col md={6} className="d-none d-md-block text-center">
            <h1 className={appStyles.Header}>Welcome</h1>
            <Image className={appStyles.Image} src={formImg} alt="logo" fluid />
          </Col>
          <Col md={6}>
            <h2 className={`mb-3 ${appStyles.Header}`}>Sign Up</h2>
            <Form onSubmit={handleSubmit}>
              <FloatingLabel
                controlId="username"
                label="Username"
                className={`${appStyles.Label} mb-3`}
              >
                <Form.Control
                  type="text"
                  placeholder="Username"
                  className={appStyles.Input}
                  name="username"
                  value={username}
                  onChange={handleChange}
                />
              </FloatingLabel>
              {errors.username?.map((message, idx) => (
                <Alert variant="danger" key={idx}>
                  {message}
                </Alert>
              ))}
              <FloatingLabel
                controlId="password1"
                label="Password"
                className="mb-3"
              >
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className={appStyles.Input}
                  name="password1"
                  value={password1}
                  onChange={handleChange}
                />
              </FloatingLabel>
              {errors.password1?.map((message, idx) => (
                <Alert variant="danger" key={idx}>
                  {message}
                </Alert>
              ))}
              <FloatingLabel
                controlId="password2"
                label="Confirm Password"
                className="mb-3"
              >
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  className={appStyles.Input}
                  name="password2"
                  value={password2}
                  onChange={handleChange}
                />
              </FloatingLabel>
              {errors.password2?.map((message, idx) => (
                <Alert variant="danger" key={idx}>
                  {message}
                </Alert>
              ))}
              <Button
                variant="primary"
                type="submit"
                className={`w-100 mb-3 ${appStyles.Button}`}
              >
                Sign Up
              </Button>
              {errors.non_field_errors?.map((message, idx) => (
                <Alert variant="danger" key={idx}>
                  {message}
                </Alert>
              ))}
            </Form>
            <p>
              Already have an account?{" "}
              <Link className={appStyles.Link} to="/signin">
                Sign in
              </Link>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SignUpForm;
