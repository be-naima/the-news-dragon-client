import React from 'react';
import { Link } from 'react-router-dom';

const Term = () => {
    return (
        <div>
            <h1>Terms & Conditions</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, nulla harum? Aut tempore ipsam consequuntur animi ut mollitia quam sint rerum. Nesciunt omnis sequi distinctio. Maxime ad ipsa blanditiis incidunt</p>
            <Link to='/register'><button>Go Back</button></Link>
        </div>
    );
};

export default Term;