import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import mixpanel from 'mixpanel-browser';
import images from '../../constants/images';

const Login = () => {
    const navigate = useNavigate();
    const { route } = useParams();  // Extracts route from params
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleClick = () => {
        if (!email || !password) {
            setError('Please fill in all fields');
            return;
        }

        mixpanel.track("Login Event", { email, password });
        setError('');
        navigate(`/${route || "dashboard"}`);  // Navigate to route param or default to /dashboard
    };

    return (
        <div className="h-[500px] bg-rose-100">
            <div className="flex flex-row justify-around items-center h-full bg-center bg-no-repeat" style={{ backgroundImage: `url(${images.study})` }}>
                <div className="h-2/4 p-5 transition-colors duration-300 bg-white/50 flex flex-col justify-between items-start">
                    <div className='text-xl text-rose-500 font-extrabold cursor-pointer hover:underline'>2000+ users</div>
                    <div className='flex flex-row justify-start items-center gap-1.5'>
                        <img src={images.time} alt='time' className='w-3 h-3' />
                        <div className='text-xs text-slate-500'>14-07-2024 : 12:05</div>
                    </div>
                </div>
                <div className="w-4/12 h-5/6 bg-white/95 flex flex-col justify-between">
                    <div className='flex flex-row justify-between items-center p-3 border-b-2'>
                        <div className='flex flex-row justify-center items-center gap-1.5'>
                            <img src={images.register} alt='register' className='w-6 h-6' />
                            <div className='text-xl font-extrabold'>Login</div>
                        </div>
                        <div className='flex flex-row'>
                            <div className='text-xs text-blue-500'>Don't have an account?</div>
                            <div className='text-xs text-blue-500 underline cursor-pointer'>Register</div>
                        </div>
                    </div>
                    <div className='flex flex-col p-5 gap-3'>
                        <div className='flex flex-row border-2 rounded'>
                            <div className='border-r-2'>
                                <img src={images.email} alt='email' className='w-5 h-5 m-3' />
                            </div>
                            <input
                                type="email"
                                placeholder='Your email address'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='flex-1 text-sm text-slate-500 p-1 focus:outline-none'
                            />
                        </div>
                        <div className='flex flex-row border-2 rounded'>
                            <div className='border-r-2'>
                                <img src={images.unlock} alt='password' className='w-5 h-5 m-3' />
                            </div>
                            <input
                                type="password"
                                placeholder='Your password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='flex-1 text-sm text-slate-500 p-1 focus:outline-none'
                            />
                        </div>
                        {error && <div className="text-red-500 text-xs">{error}</div>}
                    </div>
                    <div className='p-5 flex flex-col justify-center items-center'>
                        <div className='flex flex-row justify-start items-center gap-3'>
                            <input type="checkbox" className='w-3 h-3' />
                            <div className='text-xs text-slate-500'>I have read and agree to the Platform Agreement</div>
                        </div>
                        <div
                            className='p-3 mt-1 w-1/2 bg-rose-500 rounded text-white font-extrabold text-center cursor-pointer'
                            onClick={handleClick}
                        >
                            Login
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
