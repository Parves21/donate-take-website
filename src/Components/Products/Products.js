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
            
        </div>
    );
};

export default Products;