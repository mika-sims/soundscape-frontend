import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../assets/images/logo.svg";
import styles from "../styles/NavBar.module.css";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      {["md"].map((expand) => (
        <Navbar key={expand} expand={expand} className={styles.NavBar}>
          <Container fluid>
            <Link to={"/"}>
              <img src={logo} alt="logo" />
            </Link>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className="border-0 m-0 p-0"
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="top"
              className="w-100 h-100 border-0"
            >
              <Offcanvas.Header closeButton className="pt-1 pb-1">
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Link to={"/"}>
                    <img src={logo} alt="logo" />
                  </Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="pt-0">
                <Nav className="justify-content-end flex-grow-1 pe-3 gap-4">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? styles.active : styles.inactive
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/signin"
                    className={({ isActive }) =>
                      isActive ? styles.active : styles.inactive
                    }
                  >
                    Sign in
                  </NavLink>
                  <NavLink
                    to="/signup"
                    className={({ isActive }) =>
                      isActive ? styles.active : styles.inactive
                    }
                  >
                    Sign up
                  </NavLink>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default NavBar;
