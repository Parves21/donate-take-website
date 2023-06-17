import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='px-40 mt-8'>
            <h1 className='text-center text-red-500 font-bold text-3xl mb-5'>The Wall of Humanity
            </h1>
            <h2 className='font-bold text-2xl'>
                এটা আমাদের মানবিক Website যেখানে আপনি চাইলে, <br /> আপনার পড়ে থাকা কিছু অন্য কাউকে দান করতে পারবেন, যা অন্য জনের খুব পয়োজন।
            </h2>
            <h5 className='mt-8 font-bold'>
                <span className='text-xl font-bold text-green-400'>★ এটা কীভাবে কাজ করে?</span> <br />
                এখানে কিছু Donate করার পরে আপনাকে একটা টোকেন দেওয়া হবে।  সেই টোকেন নাম্বার সহ আপনার Donate করা Product টা আমাদের মেইন অফিসে  Code নাম্বার সহ জমা দিতে হবে।
            </h5>
            <h5 className='mt-8 font-bold'>
                <span className='text-xl font-bold text-green-400'>★ আমি কিভাবে Donate করার পর কিছু নিতে পারব?</span> <br />
                Donate করার পর একটা Navber আপনার জন্য ওপেন হবে  সেটাতে ক্লিক করলে আপনাকে একটা Item List দেখাবে ওখান থেকে আপনার পছন্দ মতো কিছু নিতে পারবেন।

            </h5>
            <br />
            <div className='Login-section'>
                <h2>
                    If you want to explore more then you need to Login !!
                </h2>
                <button className="btn btn-success mt-5">
                    <Link to='/login'>Login</Link>
                </button>
            </div>
        </div>
    );
};

export default Home;