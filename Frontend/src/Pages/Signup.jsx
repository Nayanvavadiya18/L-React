import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        // Condition 1: length
        if (password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }

        // Condition 2: number
        if (!/\d/.test(password)) {
            setError("Password must contain a number");
            return;
        }

        // Condition 3: letter
        if (!/[a-zA-Z]/.test(password)) {
            setError("Password must contain a letter");
            return;
        }

        // If all conditions pass
        navigate("/profile", {
            state: { email, password }
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-green-50 to-emerald-100 px-4">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-2xl shadow-2xl p-8">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-gray-800 mb-2">Create Account</h1>
                        <p className="text-gray-600">Join us today</p>
                    </div>

                    {error && (
                        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="form-group">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="input-field"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="input-field"
                                required
                            />
                            <p className="mt-2 text-xs text-gray-500">
                                Password must be at least 6 characters with a letter and a number
                            </p>
                        </div>

                        <button type="submit" className="btn-secondary w-full mt-6">
                            Create Account
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-gray-600">Already have an account? 
                            <button 
                                onClick={() => navigate("/")}
                                className="ml-2 text-green-600 font-semibold hover:text-green-700 transition-colors"
                            >
                                Sign In
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
