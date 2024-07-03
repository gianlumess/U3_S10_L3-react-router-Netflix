import "../assets/dist/css/Home.min.css";
import { Container, Dropdown, Image, Nav, Navbar } from "react-bootstrap";
import { BellFill, GearFill, PersonFill, Search } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const MyNavBar = () => (
  <Navbar expand="lg" className="bg-primary">
    <Container>
      <Navbar.Brand>
        <Image src="netflix_logo.png" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto ">
          <Nav.Link>
            <Link to="/">Home </Link>
          </Nav.Link>

          <Nav.Link>Tv Shows</Nav.Link>
          <Nav.Link>Movies</Nav.Link>
          <Nav.Link>Recently Added</Nav.Link>
          <Nav.Link>My List</Nav.Link>
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
              <Link to="/profile">Profile</Link>
            </Dropdown.Item>

            <Dropdown.Item className="d-flex align-items-center">
              <GearFill className="me-2" color="currentColor" />
              <Link to="/settings">Settings </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default MyNavBar;
