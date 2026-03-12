import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Visibility,
    VisibilityOff,
    Email,
    Lock,
    Facebook,
    Google,
    Twitter
} from "@mui/icons-material";

import { getAllUsers } from "../Service/userApi"; // to look up name on login

// asset import
import signinImg from '../Images/signin screen for website.png';
import {
    IconButton,
    InputAdornment,
    TextField,
    Checkbox,
    FormControlLabel
} from "@mui/material";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        if (password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }

        if (!/\d/.test(password)) {
            setError("Password must contain a number");
            return;
        }

        if (!/[a-zA-Z]/.test(password)) {
            setError("Password must contain a letter");
            return;
        }

        // look up name from API so profile can display it
        getAllUsers()
            .then((res) => {
                const list = res.data.data || res.data;
                const found = list.find((u) => u.email === email);
                const name = found?.fullName;
                navigate("/profile", {
                    state: { email, password, name }
                });
            })
            .catch((err) => {
                console.error("login lookup failed", err);
                // navigate anyway without name
                navigate("/profile", {
                    state: { email, password }
                });
            });
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-white">
            {/* Left Side - Illustration */}
            <div className="hidden md:flex flex-1 flex-col items-center justify-center p-12 bg-white">
                <h1 className="text-4xl font-bold text-slate-700 mb-12 text-center max-w-md leading-tight">
                    Manage you all Inventory Item at One Place
                </h1>
                <img
                    src={signinImg}
                    alt="Education Illustration"
                    className="w-full max-w-lg animate-fade-in"
                />
            </div>

            {/* Right Side - Login Form */}
            <div className="flex flex-1 items-center justify-center p-8 bg-white">
                <div className="w-full max-w-md bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-10 border border-gray-100">
                    <div className="text-center mb-10">
                        <h2 className="text-4xl font-semibold text-[#8B83BA] mb-2">Welcome</h2>
                    </div>

                    {error && (
                        <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl text-sm animate-shake">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Email</label>
                            <TextField
                                fullWidth
                                placeholder="Type Username"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                slotProps={{
                                    input: {
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Email sx={{ color: '#D1D5DB', fontSize: 20 }} />
                                            </InputAdornment>
                                        ),
                                        sx: {
                                            borderRadius: '50px',
                                            backgroundColor: '#ffffff',
                                            '& input:-webkit-autofill': {
                                                WebkitBoxShadow: '0 0 0 1000px white inset',
                                                WebkitTextFillColor: '#374151',
                                            },
                                            '& fieldset': { borderColor: '#E5E7EB', borderWidth: '1.5px' },
                                            '&:hover fieldset': { borderColor: '#534BB3 !important' },
                                            '&.Mui-focused fieldset': { borderColor: '#534BB3', borderWidth: '2px' },
                                            height: '48px',
                                        }
                                    }
                                }}
                                variant="outlined"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Password</label>
                            <TextField
                                fullWidth
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                slotProps={{
                                    input: {
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Lock sx={{ color: '#D1D5DB', fontSize: 20 }} />
                                            </InputAdornment>
                                        ),
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end" size="small">
                                                    {showPassword ? <VisibilityOff sx={{ fontSize: 20 }} /> : <Visibility sx={{ fontSize: 20 }} />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                        sx: {
                                            borderRadius: '50px',
                                            backgroundColor: '#ffffff',
                                            '& input:-webkit-autofill': {
                                                WebkitBoxShadow: '0 0 0 1000px white inset',
                                                WebkitTextFillColor: '#374151',
                                            },
                                            '& fieldset': { borderColor: '#E5E7EB', borderWidth: '1.5px' },
                                            '&:hover fieldset': { borderColor: '#534BB3 !important' },
                                            '&.Mui-focused fieldset': { borderColor: '#534BB3', borderWidth: '2px' },
                                            height: '48px',
                                        }
                                    }
                                }}
                                variant="outlined"
                                required
                            />
                        </div>

                        <div className="flex items-center justify-between text-xs px-1">
                            <FormControlLabel
                                control={<Checkbox size="small" sx={{ color: '#D1D5DB', '&.Mui-checked': { color: '#534BB3' } }} />}
                                label={<span className="text-gray-500 font-medium">Remember Login</span>}
                            />
                            <button type="button" className="text-gray-400 hover:text-[#534BB3] font-medium transition-colors">
                                Forgot Password?
                            </button>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#534BB3] hover:bg-[#433A9B] text-white font-bold py-3.5 rounded-full shadow-lg shadow-indigo-200 transition-all transform hover:scale-[1.01] active:scale-[0.98] mt-2"
                        >
                            Log In
                        </button>
                    </form>

                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-100"></div>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-white px-3 text-gray-400 font-bold tracking-widest">OR</span>
                        </div>
                    </div>

                    <div className="flex justify-center space-x-6 mb-10">
                        <IconButton className="hover:bg-blue-50 transition-colors">
                            <Facebook sx={{ color: '#1877F2', fontSize: 28 }} />
                        </IconButton>
                        <IconButton className="hover:bg-red-50 transition-colors">
                            <Google sx={{ color: '#DB4437', fontSize: 28 }} />
                        </IconButton>
                        <IconButton className="hover:bg-blue-50 transition-colors">
                            <Twitter sx={{ color: '#1DA1F2', fontSize: 28 }} />
                        </IconButton>
                    </div>

                    <div className="text-center text-sm font-medium text-gray-500">
                        Don't have account?
                        <button
                            onClick={() => navigate("/signup")}
                            className="ml-1.5 text-gray-800 font-bold hover:text-[#534BB3] transition-colors"
                        >
                            SignUp
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
