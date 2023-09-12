import React, { useState, SyntheticEvent } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, Auth, UserCredential } from 'firebase/auth';
import { auth } from '../firebase';

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
        <main>
            <section>
                <div>
                    <div>
                        <h1>FocusApp</h1>
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
            </section>
        </main>
    );
};

export default Signup;

