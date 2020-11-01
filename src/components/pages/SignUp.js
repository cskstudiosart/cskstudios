import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import Title from '../Title';

function SignUp() {
    Title('Sign Up');
    return (
        <>
            <h1 className='sign-up_page'>SIGN UP</h1>
            <Footer />
        </>
    );
};

export default SignUp;