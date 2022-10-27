import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { Link } from 'react-router-dom';


const Login = () => {

    const { providerLogin, signIn } = useContext(AuthContext);

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
        })
        .catch(error => console.log(error))


    }

    const gogoleProvider = new GoogleAuthProvider();

    const handleGoogleSingin = () => {
        providerLogin(gogoleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }
    return (
        <Form onSubmit={handleSubmit} className='w-50 mx-auto'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" />
            </Form.Group>

            <Form.Text className="text-muted">
                <p>If you are not register! Please create Register here <Link to='/register'>Register</Link></p>
            </Form.Text>

            <Button variant="primary" type="submit">
                Submit
            </Button>

            
            <br />
            <div className='text-center'>
                <ButtonGroup vertical>
                    <Button onClick={handleGoogleSingin} className='mb-4' variant='outline-primary'> <FaGoogle></FaGoogle> Login WIth Google</Button>
                    <Button variant='outline-primary'> <FaGithub></FaGithub> Login With GitHub</Button>
                </ButtonGroup>
            </div>

        </Form>



    );
};

export default Login;