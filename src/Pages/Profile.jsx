import { useLocation } from "react-router-dom";

function Profile() {
  const location = useLocation();
  const { email, password } = location.state || {};

  return (
    <div>
      <h2>Profile Page</h2>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
    </div>
  );
}

export default Profile;
