import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";

function Signup() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Condition 1: length
        if (password.length < 6) {
            alert("Password must be at least 6 characters");
            return;
        }

        // Condition 2: number
        if (!/\d/.test(password)) {
            alert("Password must contain a number");
            return;
        }

        // Condition 3: letter
        if (!/[a-zA-Z]/.test(password)) {
            alert("Password must contain a letter");
            return;
        }

        // If all conditions pass
        navigate("/profile", {
            state: { email, password }
        });
    };


    return (
        <div className="page-center">
            <div className="auth-container">
                <h2>Signup</h2>

                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <br />

                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <br /><br />

                    <button type="submit">Signup</button>
                </form>

                <p onClick={() => navigate("/")}>
                    Go to Login
                </p>
            </div>
        </div>
    );
}

export default Signup;
