import React from 'react';
import UseProducts from '../../UseProducts/UseProducts';
import './Products.css';
import { Link, useLoaderData } from 'react-router-dom';

const Products = () => {
    const products = useLoaderData();
    // console.log(products[0].name);
    return (
        <div>
            <h2 className='text-2xl font-bold mt-5'>How many Products we have aviliable :  <span className='text-green-400 font-bold text-3xl'> {products.length} !!</span></h2>
            <div className="products-container">
                {
                    products.map(product => <UseProducts
                        key={product.id}
                        product={product}
                    ></UseProducts>)
                }
            </div>
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

export default Products;