import { useLocation } from "react-router-dom";
<<<<<<< HEAD
=======
import Navbar from "../components/Navbar";
import Card1 from "../components/Card1";
import { Slider as MUISlider } from "@mui/material";
import Slider from "../components/Slider";
import Users from "../components/Users";
>>>>>>> 20ea1fb (Thied task)

function Profile() {
  const location = useLocation();
  const { email, password } = location.state || {};

  return (
    <div>
      <h2>Profile Page</h2>
<<<<<<< HEAD
      <p>Email: {email}</p>
      <p>Password: {password}</p>
=======
      {/* <p>Email: {email}</p>
      <p>Password: {password}</p> */}
      <Slider />
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", minHeight: "80vh" }}>
        <Card1 />
        <Users />
      </div>
>>>>>>> 20ea1fb (Thied task)
    </div>
  );
}

export default Profile;
