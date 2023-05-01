
import React, { useContext } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import facImg from '../../assets/images/icons/fb.png'
import googleImg from '../../assets/images/icons/google.png'
import { AuthContext } from '../../AuthProvider/AuthProvider'

function Singup() {
    const { singUp, google } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.form?.pathname || '/';

    const handleSingUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        const password = form.password.value;

        singUp(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigate(from);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    const handleGoogle = () => {
        google()
            .then((result) => {
                const user = result.user;
                navigate(from);
            })
            .catch(error => console.log(error))
    }


    return (
        <div className='w-100 d-flex flex-column justify-content-center align-items-center gap-2'>
            <Form onSubmit={handleSingUp} className='bg-white p-3 px-4 rounded-4' style={{ width: '400px' }}>
                <h4 className='mb-4'>Create an account</h4>
                <Form.Group className="mb-3">
                    <Form.Control type="text" id='firstName' name='firstName' placeholder="First Name" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control type="text" id='lastName' name='lastName' placeholder="Last Name" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control type="email" id='email' name='email' placeholder="Username or Email" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control type="password" id='password' name='password' placeholder="Password" required />
                </Form.Group>
                <div className='d-flex justify-content-between align-items-center mb-3'>
                    <Form.Group className="">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Link>Forgot Password</Link>
                </div>
                <Button variant="warning" className='w-100 py-2 my-3' type="submit">
                    Login
                </Button>
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </Form>
            <div className='d-flex align-items-center gap-2 text-white' style={{ width: '300px' }}>
                <div style={{ width: '100%', height: '2px', backgroundColor: 'white' }}></div>
                <p className='fs-5 m-0'>Or</p>
                <div style={{ width: '100%', height: '2px', backgroundColor: 'white' }}></div>
            </div>
            <div style={{ width: '300px' }}>
                <Button className='bg-white text-dark w-100 d-flex align-items-center gap-4 fs-6 fw-semibold rounded-pill'>
                    <p className='text-start m-0'><img src={facImg} alt="faIcon" style={{ height: '2rem', width: '2rem' }} /></p>
                    <p className='d-inline m-0 '>Continue With Facebook</p>
                </Button>
                <Button onClick={handleGoogle} className='bg-white text-dark w-100 d-flex align-items-center gap-4 fs-6 fw-semibold rounded-pill mt-3'>
                    <p className='text-start m-0'><img src={googleImg} alt="faIcon" style={{ height: '2rem', width: '2rem' }} /></p>
                    <p className='d-inline m-0 '>Continue With Google</p>
                </Button>
            </div>
        </div>
    )
}

export default Singup
