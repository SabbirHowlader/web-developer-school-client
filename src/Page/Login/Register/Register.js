import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';


const Register = () => {

    const {createUser} = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
        .then(result => {
            const user =result.user;
            console.log(user);
            form.reset();
        })
        .catch(e=> console.error(e));
    }
    return (
        <Form onSubmit={handleSubmit} className='w-50 mx-auto'>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" type="text" placeholder="Enter Name"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" />
            </Form.Group>

            <Form.Text className="">
                <p>If you are register! Please Login here <Link to='/login'>Login</Link></p>
            </Form.Text>
           
            <Button variant="primary" type="submit">
                Register
            </Button>
            
        </Form>
    );
};

export default Register;