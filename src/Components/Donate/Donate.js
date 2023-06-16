import React, { useState } from 'react';
import './Donate.css';
import { Link } from 'react-router-dom';


/* 
const [imageSrc, setImageSrc] = useState('');
const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImageSrc(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
*/

const Donate = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(URL.createObjectURL(file));
    };

    const handleGenarateCode = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const productName = form.product.value;
        console.log(productName, name, selectedImage);
        setSelectedImage('');
        form.reset();
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-cyan-400">
                        <form onSubmit={handleGenarateCode} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Donator Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Product Name</span>
                                </label>
                                <input type="text" name='product' placeholder="product name" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-5">
                                <label className='font-bold text-xl' htmlFor="upload-input">
                                    Click to Upload Image
                                </label>
                                <input
                                    id="upload-input"
                                    type="file"
                                    name="img"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    style={{ display: 'none' }}
                                />
                                <div>
                                    <img src={selectedImage} alt='Must set Image' />
                                </div>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">
                                    <Link to='/generatepin'>Submit</Link>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donate;