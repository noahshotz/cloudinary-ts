import React, { useState, SyntheticEvent } from 'react';
import { createUserWithEmailAndPassword, Auth, UserCredential } from 'firebase/auth';
import { auth } from '../firebase';
import { NavLink, useNavigate } from 'react-router-dom';

//import Sidebar from './components/Sidebar';

const Signup: React.FC = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const onSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();

        try {
            const userCredential: UserCredential = await createUserWithEmailAndPassword(
                auth as Auth, // Cast to Auth type
                email,
                password
            );

            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate("/login");
        } catch (error: any) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode, errorMessage);
        }
    };

    return (
        <React.Fragment>
            <div className="fullscreen-form-wrapper">
                <div className="fullscreen-bg-container">
                    <h1>ImageHub</h1>
                </div>
                <div className="login-ct">
                    <div className="login-group">
                        <h2>Sign up</h2>
                        <form>
                            <div>
                                <label htmlFor="email-address">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder="Email address"
                                />
                            </div>

                            <div>
                                <label htmlFor="password">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    placeholder="Password"
                                />
                            </div>

                            <button
                                type="submit"
                                onClick={onSubmit}
                            >
                                Sign up
                            </button>
                        </form>
                        <p>
                            Already have an account?{' '}
                            <NavLink to="/login">
                                Sign in
                            </NavLink>
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment >
    );
};

export default Signup;

