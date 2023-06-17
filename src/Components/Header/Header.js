import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { AuthContext } from '../context/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    return (
        <div>
            <nav className='navber bg-emerald-200 flex justify-between p-4'>
                <h2 className='text-green-700 font-bold'>The Wall of Humanity
                </h2>
                <div>
                    <Link to='/'>About Us</Link>
                    <Link className='font-bold' to='/products'>Products</Link>
                    <Link to='/donate'>Donate</Link>
                    <Link to='/take'>Take</Link>
                </div>
                {
                    user?.uid ?
                        <button style={{ marginLeft: '30px' }} onClick={logOut} className="btn btn-outline btn-sm btn-success">LogOut</button>
                        :
                        <Link to='/login'>LogIn</Link>
                }
            </nav>
        </div>
    );
};

export default Header;