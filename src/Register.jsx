import React, { useState } from 'react';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import  { AuthContext } from './AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const [accept,setAccept] = useState(false)
    const btnRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const Your_Name = form.Your_Name.value;
        const Photo_url = form.Photo_url.value;
        const email = form.email.value;
        const password = form.password.value;
        
        
        form.reset();
        createUser(email,password)
        .then(result =>{
            const logged = result.user;
            console.log(logged);
        })
        .catch(error =>{
            console.log(error.message);
        })
    }
    const btncheck = (event) =>{
        setAccept(event.target.checked) 
    
        
         
    }
    return (
        <Container className='w-25 mx-auto'>
            <Form onSubmit={btnRegister}>
                <h2 className='mt-5 mb-4' >Please Register</h2>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='Your_Name' required placeholder="Your Name" />
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Photo url</Form.Label>
                    <Form.Control type="text" name='Photo_url' required placeholder="Photo url" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' required placeholder="Enter email" />

                </Form.Group>

                
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' required placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" name= 'accept'
                    onClick={btncheck} 
                    
                    label={<Link to="/term">Accept Terms & Condition</Link>} />
                </Form.Group>
                <Button variant="primary" type="submit" disabled = {!accept}>
                   Register
                </Button>
                <br />
                <Form.Text className="text-danger">
                    
                </Form.Text>
                <Form.Text className="text-success">
                    
                </Form.Text>
                <Form.Text className="text-success">
                  Already Have an Account?  <Link to="/login">Login</Link>
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;