import React from 'react';
import { Link } from 'react-router-dom';

const Take = () => {

    const alertAdd = () =>{
        alert("Button clicked !!!");
    }

    return (
        <div>
            <button onClick={alertAdd} className="btn btn-outline btn-success mt-10">
                <Link to='/products'>Take Something</Link>
            </button>
        </div>
    );
};

export default Take;