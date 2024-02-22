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

const SignInForm = () => {
  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const { username, password } = signInData;
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/dj-rest-auth/login/", signInData);
      navigate("/");
    } catch (error) {
      setErrors(error.response?.data);
    }
  };

  const handleChange = (e) => {
    setSignInData({ ...signInData, [e.target.name]: e.target.value });
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
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Username"
                  className={appStyles.Input}
                  autoComplete="username"
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
                controlId="password"
                label="Password"
                className="mb-3"
              >
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className={appStyles.Input}
                  autoComplete="current-password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </FloatingLabel>
              {errors.password?.map((message, idx) => (
                <Alert key={idx} variant="danger" className="mb-3">
                  {message}
                </Alert>
              ))}
              <Button
                variant="primary"
                type="submit"
                className={`w-100 mb-3 ${appStyles.Button}`}
              >
                Sign In
              </Button>
              {errors.non_field_errors?.map((message, idx) => (
                <Alert key={idx} variant="danger">
                  {message}
                </Alert>
              ))}
            </Form>
            <p>
              Don't have an account?{" "}
              <Link className={appStyles.Link} to="/signup">
                Sign up!
              </Link>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SignInForm;
