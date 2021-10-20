import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || './home'
    // console.log('came from', location.state?.from); 

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = e => {
        setEmail(e.target.value);
    }

    const handlePassword = e => {
        setPassword(e.target.value);
    }

    const handleLogin = e => {
        console.log(email, password);
        e.preventDefault();
    }

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then((result) => {
                history.push(redirect_uri);
            })
    }
    return (
        <div className="m-5 border p-5">
            <h2 className="text-center " style={{ color: 'brown' }}> Login Form</h2>
            <form onSubmit={handleLogin}>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onBlur={handleEmail} type="email" className="form-control" id="inputEmail3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input onBlur={handlePassword} type="password" className="form-control" id="inputPassword3" required />
                    </div>
                </div>
                <Button onClick={handleGoogleLogin} className="text-center px-5" variant="primary" size="lg" active>Login</Button>
            </form>
            {/* <div className="text-center">
                    <Button className="my-3 px-5" style={{ backgroundColor: 'royalBlue' }} size="lg" active>LOGIN</Button>
                </div> */}

            <div className="text-center fw-bold">-------------------OR--------------------</div>

            <div className="text-center my-4">
                <Button onClick={handleGoogleLogin} className="mt-1" variant="danger" size="lg" active>Google Sign In</Button>

                <p className="my-2">new user? Please <Link to="/register">Register</Link></p>
            </div>



        </div >
    );
};

export default Login;