import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './UseProducts.css';

const UseProducts = ({ product }) => {
    const { id, name, img, expireDate } = product;
    // console.log(product);
    return (
        <div>
            <div className='product'>
                <img src={img} alt=""></img>
                <div className='product-info'>
                    <p className='product-name'>{name}</p>
                    <p>Expire Date: {expireDate}</p>
                </div>
                <button className='btn-cart'>
                    <p className='btn-text'>Add to Take</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default UseProducts;