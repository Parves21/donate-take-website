import { faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

const Login = () => {

    const {logIn} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        logIn(email, password)
        .then( result =>{
            const user = result.user;
            console.log(user);
            form.reset();
            navigate('/products');
        })
        .catch(error =>{
            console.error("error", error);
        })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h3 className="text-4xl font-bold">Login Now <span className='text-success'>!!</span></h3>
                        <p className="py-6">If you want to explore more than Please Login Now.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Enter Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Enter Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <FontAwesomeIcon className='login-font-eye' icon={faEyeSlash} />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-red-500">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-success">Login</button>
                            </div>
                            <p>Don't have an Account? <small className='underline underline-offset-1 text-teal-500'><Link to='/signup'>create account</Link></small> </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;