import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
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
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100 px-4">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-2xl shadow-2xl p-8">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-gray-800 mb-2">Welcome Back</h1>
                        <p className="text-gray-600">Sign in to your account</p>
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
                        </div>

                        <button type="submit" className="btn-primary w-full mt-6">
                            Sign In
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-gray-600">Don't have an account? 
                            <button 
                                onClick={() => navigate("/signup")}
                                className="ml-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                            >
                                Sign Up
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
