import { Container } from "react-bootstrap";
import ProfileNavbar from "../components/ProfileNavbar";
import ProfileEditSection from "../components/ProfileEditSection";

const Profile = () => (
  <div data-bs-theme="dark" className="bg-primary text-white">
    <ProfileNavbar />
    <Container>
      <h1 className="display-2">Edit Profile</h1>
      <hr />
      <ProfileEditSection />
    </Container>
  </div>
);

export default Profile;
