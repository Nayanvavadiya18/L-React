import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import User from "./Users";

function Profile() {
  const location = useLocation();
  const { email, password } = location.state || {};

  return (
    <div>
      <h2>Profile Page</h2>
      {/* <p>Email: {email}</p>
      <p>Password: {password}</p> */}
      <Navbar />
      <User />

    </div>
  );
}

export default Profile;
