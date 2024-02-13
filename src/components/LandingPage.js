import React from "react";
import styles from "../styles/LandingPage.module.css";
import logo from "../assets/images/logo.svg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import ReactParticles from "../components/ReactParticles";

const LandingPage = () => {
  return (
    <div className={styles.LandingPage}>
      <Card className={styles.Card}>
        <h1 className={`${styles.Title}`}>SOUNDSCAPE</h1>
        <Card.Img variant="top" src={logo} className={styles.Logo} />
        <Card.Body className="text-center">
          <h4 className="mb-3">Your acoustic environment</h4>
          <p>Share your acoustic environment</p>
          <p>Get inspired by the sounds of the world</p>
          <Button className={styles.Button}>
            <Link to={"/signin"}>Get Started</Link>
          </Button>
        </Card.Body>
      </Card>
      <ReactParticles />
    </div>
  );
};

export default LandingPage;
