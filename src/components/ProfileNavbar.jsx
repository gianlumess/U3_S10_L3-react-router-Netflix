import { Image, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProfileNavbar = () => (
  <Navbar expand="lg">
    <>
      <Navbar.Brand>
        <Link to="/">
          {" "}
          <Image src="netflix_logo.png" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
    </>
  </Navbar>
);

export default ProfileNavbar;
