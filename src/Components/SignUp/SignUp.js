import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

const SignUp = () => {

    const {createUser} = useContext(AuthContext);

    const handleSignUpEmail = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password);

        createUser(email, password)
        .then( result =>{
            const user = result.user;
            console.log(user);
            form.reset();
        })
        .catch( error =>{
            console.error("Error", error);
        })
        
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h3 className="text-4xl font-bold">SignUp Now <span className='text-success'>!!</span></h3>
                        <p className="py-6 mb-0">First, you have to complete this form then Login. After Login, <br /> you can explore our donate and take website.</p>
                    </div>
                    <div className="card mt-12 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignUpEmail} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Enter Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <FontAwesomeIcon className='font-awesome' icon={faEyeSlash} />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-success">SignUp</button>
                            </div>
                            <p>Have an Account? <small className='underline underline-offset-1 text-teal-500'><Link to='/login'>login</Link></small></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;