import "../assets/dist/css/Home.min.css";
import { Container, Dropdown, Image, Nav, Navbar } from "react-bootstrap";
import { BellFill, GearFill, PersonFill, Search } from "react-bootstrap-icons";
import { Link, NavLink } from "react-router-dom";

const MyNavBar = () => (
  <Navbar expand="lg" className="bg-primary">
    <Container>
      <Navbar.Brand>
        <Image src="netflix_logo.png" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto ">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>

          <NavLink to="/" className="nav-link">
            Tv Shows
          </NavLink>
          <NavLink to="/" className="nav-link">
            Movies
          </NavLink>
          <NavLink to="/" className="nav-link">
            Recently Added
          </NavLink>
          <NavLink to="/" className="nav-link">
            My List
          </NavLink>
        </Nav>
        <button className="btn" type="submit">
          <Search color="currentColor" />
        </button>
        <span className="navbar-text"> KIDS </span>
        <button className="btn" type="submit">
          <BellFill color="currentColor" />
        </button>
        <Dropdown>
          <Dropdown.Toggle className="p-0" id="dropdown-basic">
            <Image alt="avatar logo" src="avatar.png" />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item className="d-flex align-items-center">
              <PersonFill className="me-2" color="currentColor" />
              <NavLink to="/profile" className="nav-link">
                Profile
              </NavLink>
            </Dropdown.Item>

            <Dropdown.Item className="d-flex align-items-center">
              <GearFill className="me-2" color="currentColor" />
              <NavLink to="/settings" className="nav-link">
                Settings{" "}
              </NavLink>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default MyNavBar;
