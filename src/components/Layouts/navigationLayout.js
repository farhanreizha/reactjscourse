import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaImage, FaBook } from "react-icons/fa";

const NavigationLayout = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="me-5">
          DEACOURSE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* <Nav className="me-auto" activeKey={window.location.pathname}> */}
          <Nav className="me-auto" style={{ width: "100%" }}>
            <NavLink
              to="/albums"
              className={({ isActive }) =>
                isActive
                  ? "text-white text-decoration-none me-5 nav-item"
                  : "text-white-50 text-decoration-none me-5 nav-item"
              }
            >
              <FaImage className="me-2" />
              IMAGES
            </NavLink>
            <NavLink
              to="/posts"
              className={({ isActive }) =>
                isActive
                  ? "text-white text-decoration-none me-5 nav-item"
                  : "text-white-50 text-decoration-none me-5 nav-item"
              }
            >
              <FaBook className="me-2" />
              POSTS
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationLayout;
