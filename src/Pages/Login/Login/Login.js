import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div >
            <Card className="m-5 p-4" style={{ backgroundColor: 'antiqueWhite' }}>
                <h2 className="text-center" style={{ color: 'brown' }}> Login Form</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Form>
                <Button onClick={signInUsingGoogle} className="my-3" style={{ backgroundColor: 'royalBlue' }} size="lg" active>LOGIN</Button>
                <div className="text-center fw-bold">-------------------OR--------------------</div>
                <div className="text-center my-4">
                    <Button onClick={signInUsingGoogle} className="mt-1" variant="warning" size="lg" active>Google Sign In</Button>
                    <Button className="ms-4" variant="danger" size="lg" active>Github Sign In</Button>
                    <p className="my-2">new user? Please <a href="#register">register</a></p>
                </div>
            </Card>



        </div >
    );
};

export default Login;