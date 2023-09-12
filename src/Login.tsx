import React, { useState, SyntheticEvent } from 'react';
import { signInWithEmailAndPassword, Auth, UserCredential } from 'firebase/auth';
import { auth } from '../firebase';
import { NavLink, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onLogin = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      const userCredential: UserCredential = await signInWithEmailAndPassword(
        auth as Auth, // Cast to Auth type
        email,
        password
      );

      // Signed in
      const user = userCredential.user;
      navigate("/home");
      console.log(user);
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
    }
  };

  return (
    <>
      <main>
        <section>
          <div>
            <p>Cloudinary TS Login</p>
            <form>
              <div>
                <label htmlFor="email-address">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div>
                <button
                  onClick={onLogin}
                >
                  Login
                </button>
              </div>
            </form>

            <p className="text-sm text-white text-center">
              No account yet?{' '}
              <NavLink to="/signup">
                Sign up
              </NavLink>
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
