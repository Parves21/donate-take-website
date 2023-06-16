import React, { useState } from 'react';
import './GeneratePin.css';

const GeneratePin = (props) => {

    console.log(props.name);

    const [Pin, setPin] = useState(null);
    const [isButtonDisabled, setButtonDisabled] = useState(false);

    const genPin = () => {
        const pin1 = Math.round(Math.random() * 10000);
        const pin2 = pin1 + '';
        if (pin2.length === 4) {
            setPin(pin2);
        }
        setButtonDisabled(true);
    }
    return (
        <div className='containerGeneratePin'>
            <div className='generatePinInformation'>
                <h1 className='font-bold'>Name:  <span className='text-green-500 ps-2'>Nur Islam</span></h1>
                <h2 className='font-bold'>Product Name : <span>PenCil</span></h2>
                <h2 className='font-bold'>Your Code Pin is = {Pin}</h2>
                <img className='pinImageControl' src="https://cdn.thewirecutter.com/wp-content/media/2021/09/pencils-2048px-6581-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=980&dpr=2" alt="image" />
            </div>
            <div>
                <button onClick={genPin} className="btn btn-outline btn-success" disabled={isButtonDisabled}>
                    GeneratePin
                </button>
                <p className='text-sm'>Click up to get your information and Pin. <span className='text-red-500'> Do not share it with someone !!</span></p>
            </div>
        </div>
    );
};

export default GeneratePin;