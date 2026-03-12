import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Facebook,
    Google,
    Twitter,
    LinkedIn,
    Person,
    Email,
    Lock
} from "@mui/icons-material";
import {
    IconButton,
    InputAdornment,
    TextField,
    Checkbox,
    FormControlLabel
} from "@mui/material";

// asset for illustration
import signupImg from '../Images/Screenshot 2026-02-19 150437.png';

function Signup() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [gender, setGender] = useState("");
    const [dob, setDob] = useState("");
    const [mobile, setMobile] = useState("");
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

        // Confirm password match
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        // Mobile basic validation (digits only)
        if (!/^[0-9]{10}$/.test(mobile)) {
            setError("Enter a valid 10-digit mobile number");
            return;
        }

        // Date of birth optional: ensure not in future
        if (dob && new Date(dob) > new Date()) {
            setError("Date of birth cannot be in the future");
            return;
        }

        // Gender required
        if (!gender) {
            setError("Please select a gender");
            return;
        }

        // If all conditions pass
        navigate("/profile", {
            state: { name, email, password, gender, dob, mobile }
        });
    };

    return (
        <div className="h-screen flex flex-col md:flex-row bg-[#F8FAFC] overflow-hidden">
            {/* Left illustration */}
            <div className="hidden md:flex flex-1 flex-col items-center justify-center p-8 bg-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-50/50 to-white z-0" />
                <div className="relative z-10 text-center animate-fade-in">
                    <h1 className="text-4xl font-extrabold text-[#1E293B] mb-4 leading-tight tracking-tight">
                        Join our <span className="text-[#534BB3]">Inventory</span> <br />Revolution
                    </h1>
                    <p className="text-sm text-slate-500 mb-8 max-w-sm mx-auto font-medium">
                        Powerful management tools to help your business grow faster than ever.
                    </p>
                    <div className="relative group cursor-pointer transition-transform duration-500 transform hover:scale-[1.01]">
                        <div className="absolute -inset-4 bg-indigo-100/50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />
                        <img
                            src={signupImg}
                            alt="Create account illustration"
                            className="w-full max-w-xs relative z-10 drop-shadow-xl"
                        />
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute bottom-10 right-10 w-24 h-24 bg-indigo-100/30 rounded-full blur-3xl animate-pulse" />
                <div className="absolute top-10 left-10 w-32 h-32 bg-purple-100/30 rounded-full blur-3xl animate-pulse delay-700" />
            </div>

            {/* Right form */}
            <div className="flex flex-1 items-center justify-center p-4 md:p-8 z-10">
                <div className="w-full max-w-xl bg-white rounded-[1.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.03)] p-6 md:p-8 border border-slate-50 animate-slide-in">
                    <div className="text-center mb-6">
                        <div className="inline-block px-3 py-1 mb-2 text-[10px] font-bold text-indigo-600 bg-indigo-50 rounded-full uppercase tracking-widest">
                            New Account
                        </div>
                        <h2 className="text-3xl font-bold text-slate-800 mb-1">Create Account</h2>
                        <p className="text-[11px] text-slate-400 font-medium italic">Join thousands of smart managers today</p>
                    </div>

                    <div className="flex justify-center space-x-3 mb-6">
                        {[
                            { icon: <Facebook sx={{ fontSize: 18 }} />, color: '#1877F2', bg: 'hover:bg-blue-50' },
                            { icon: <Twitter sx={{ fontSize: 18 }} />, color: '#1DA1F2', bg: 'hover:bg-blue-50' },
                            { icon: <Google sx={{ fontSize: 18 }} />, color: '#DB4437', bg: 'hover:bg-red-50' },
                            { icon: <LinkedIn sx={{ fontSize: 18 }} />, color: '#0A66C2', bg: 'hover:bg-blue-50' }
                        ].map((social, i) => (
                            <IconButton
                                key={i}
                                className={`${social.bg} transition-all duration-300 border border-slate-50 hover:border-transparent hover:shadow-sm active:scale-95 p-2`}
                            >
                                {i === 0 ? <Facebook sx={{ color: social.color, fontSize: 18 }} /> :
                                    i === 1 ? <Twitter sx={{ color: social.color, fontSize: 18 }} /> :
                                        i === 2 ? <Google sx={{ color: social.color, fontSize: 18 }} /> :
                                            <LinkedIn sx={{ color: social.color, fontSize: 18 }} />}
                            </IconButton>
                        ))}
                    </div>

                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-slate-100"></div>
                        </div>
                        <div className="relative flex justify-center text-[9px] font-black uppercase tracking-[0.2em]">
                            <span className="bg-white px-4 text-slate-300">OR REGISTER WITH EMAIL</span>
                        </div>
                    </div>

                    {error && (
                        <div className="mb-4 p-3 bg-rose-50 border border-rose-100 text-rose-600 rounded-xl text-[10px] font-semibold flex items-center animate-shake">
                            <div className="w-1 h-1 bg-rose-500 rounded-full mr-2 animate-pulse" />
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Row 1: Name and Email */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                                <TextField
                                    fullWidth
                                    placeholder="John Doe"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    slotProps={{
                                        input: {
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <Person sx={{ color: '#94A3B8', fontSize: 16 }} />
                                                </InputAdornment>
                                            ),
                                            sx: {
                                                borderRadius: '12px',
                                                backgroundColor: '#F8FAFC',
                                                '& fieldset': { borderColor: 'transparent' },
                                                '&:hover fieldset': { borderColor: '#534BB3 !important', opacity: 0.3 },
                                                '&.Mui-focused fieldset': { borderColor: '#534BB3', borderWidth: '1.5px', opacity: 1 },
                                                '&.Mui-focused': { backgroundColor: '#fff', boxShadow: '0 4px 15px rgba(83, 75, 179, 0.05)' },
                                                height: '42px',
                                                fontSize: '0.875rem',
                                                transition: 'all 0.3s ease',
                                                '& input:-webkit-autofill': {
                                                    WebkitBoxShadow: '0 0 0 1000px #F8FAFC inset',
                                                    WebkitTextFillColor: '#374151',
                                                }
                                            }
                                        }
                                    }}
                                    variant="outlined"
                                    required
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email</label>
                                <TextField
                                    fullWidth
                                    placeholder="hello@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    slotProps={{
                                        input: {
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <Email sx={{ color: '#94A3B8', fontSize: 16 }} />
                                                </InputAdornment>
                                            ),
                                            sx: {
                                                borderRadius: '12px',
                                                backgroundColor: '#F8FAFC',
                                                '& fieldset': { borderColor: 'transparent' },
                                                '&:hover fieldset': { borderColor: '#534BB3 !important', opacity: 0.3 },
                                                '&.Mui-focused fieldset': { borderColor: '#534BB3', borderWidth: '1.5px', opacity: 1 },
                                                '&.Mui-focused': { backgroundColor: '#fff', boxShadow: '0 4px 15px rgba(83, 75, 179, 0.05)' },
                                                height: '42px',
                                                fontSize: '0.875rem',
                                                transition: 'all 0.3s ease',
                                                '& input:-webkit-autofill': {
                                                    WebkitBoxShadow: '0 0 0 1000px #F8FAFC inset',
                                                    WebkitTextFillColor: '#374151',
                                                }
                                            }
                                        }
                                    }}
                                    variant="outlined"
                                    required
                                />
                            </div>
                        </div>

                        {/* Row 2: Passwords */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Password</label>
                                <TextField
                                    fullWidth
                                    type="password"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    slotProps={{
                                        input: {
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <Lock sx={{ color: '#94A3B8', fontSize: 16 }} />
                                                </InputAdornment>
                                            ),
                                            sx: {
                                                borderRadius: '12px',
                                                backgroundColor: '#F8FAFC',
                                                '& fieldset': { borderColor: 'transparent' },
                                                '&:hover fieldset': { borderColor: '#534BB3 !important', opacity: 0.3 },
                                                '&.Mui-focused fieldset': { borderColor: '#534BB3', borderWidth: '1.5px', opacity: 1 },
                                                '&.Mui-focused': { backgroundColor: '#fff', boxShadow: '0 4px 15px rgba(83, 75, 179, 0.05)' },
                                                height: '42px',
                                                fontSize: '0.875rem',
                                                transition: 'all 0.3s ease',
                                                '& input:-webkit-autofill': {
                                                    WebkitBoxShadow: '0 0 0 1000px #F8FAFC inset',
                                                    WebkitTextFillColor: '#374151',
                                                }
                                            }
                                        }
                                    }}
                                    variant="outlined"
                                    required
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Confirm</label>
                                <TextField
                                    fullWidth
                                    type="password"
                                    placeholder="••••••••"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    slotProps={{
                                        input: {
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <Lock sx={{ color: '#94A3B8', fontSize: 16 }} />
                                                </InputAdornment>
                                            ),
                                            sx: {
                                                borderRadius: '12px',
                                                backgroundColor: '#F8FAFC',
                                                '& fieldset': { borderColor: 'transparent' },
                                                '&:hover fieldset': { borderColor: '#534BB3 !important', opacity: 0.3 },
                                                '&.Mui-focused fieldset': { borderColor: '#534BB3', borderWidth: '1.5px', opacity: 1 },
                                                '&.Mui-focused': { backgroundColor: '#fff', boxShadow: '0 4px 15px rgba(83, 75, 179, 0.05)' },
                                                height: '42px',
                                                fontSize: '0.875rem',
                                                transition: 'all 0.3s ease',
                                                '& input:-webkit-autofill': {
                                                    WebkitBoxShadow: '0 0 0 1000px #F8FAFC inset',
                                                    WebkitTextFillColor: '#374151',
                                                }
                                            }
                                        }
                                    }}
                                    variant="outlined"
                                    required
                                />
                            </div>
                        </div>

                        {/* Row 3: Details */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            <div className="space-y-1">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Gender</label>
                                <TextField
                                    select
                                    fullWidth
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                    SelectProps={{ native: true }}
                                    variant="outlined"
                                    required
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '12px',
                                            backgroundColor: '#F8FAFC',
                                            '& fieldset': { borderColor: 'transparent' },
                                            '&:hover fieldset': { borderColor: '#534BB3 !important', opacity: 0.3 },
                                            '&.Mui-focused fieldset': { borderColor: '#534BB3', borderWidth: '1.5px' },
                                            height: '42px',
                                            fontSize: '0.875rem',
                                            transition: 'all 0.3s ease'
                                        }
                                    }}
                                >
                                    <option value="">Select</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </TextField>
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">DOB</label>
                                <TextField
                                    fullWidth
                                    type="date"
                                    value={dob}
                                    onChange={(e) => setDob(e.target.value)}
                                    InputLabelProps={{ shrink: true }}
                                    variant="outlined"
                                    required
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '12px',
                                            backgroundColor: '#F8FAFC',
                                            '& fieldset': { borderColor: 'transparent' },
                                            '&:hover fieldset': { borderColor: '#534BB3 !important', opacity: 0.3 },
                                            '&.Mui-focused fieldset': { borderColor: '#534BB3', borderWidth: '1.5px' },
                                            height: '42px',
                                            fontSize: '0.875rem',
                                            transition: 'all 0.3s ease'
                                        }
                                    }}
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Mobile</label>
                                <TextField
                                    fullWidth
                                    placeholder="10 Digits"
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value)}
                                    inputProps={{ maxLength: 10 }}
                                    variant="outlined"
                                    required
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '12px',
                                            backgroundColor: '#F8FAFC',
                                            '& fieldset': { borderColor: 'transparent' },
                                            '&:hover fieldset': { borderColor: '#534BB3 !important', opacity: 0.3 },
                                            '&.Mui-focused fieldset': { borderColor: '#534BB3', borderWidth: '1.5px' },
                                            height: '42px',
                                            fontSize: '0.875rem',
                                            transition: 'all 0.3s ease'
                                        }
                                    }}
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#534BB3] hover:bg-[#433A9B] text-white text-[11px] font-black py-3 rounded-xl shadow-[0_8px_20px_rgba(83,75,179,0.2)] hover:shadow-[0_12px_25px_rgba(83,75,179,0.3)] transition-all duration-300 transform hover:scale-[1.01] active:scale-[0.98] mt-2 uppercase tracking-[0.15em]"
                        >
                            Complete Registration
                        </button>
                    </form>

                    <div className="text-center text-[11px] font-bold text-slate-400 mt-6 group cursor-pointer" onClick={() => navigate("/")}>
                        Already a member?
                        <span className="ml-2 text-slate-800 group-hover:text-[#534BB3] transition-colors duration-300">
                            Login here
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
