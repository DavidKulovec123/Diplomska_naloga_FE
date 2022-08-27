import React, { SyntheticEvent, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

import axios from "axios";

const Login = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const data = {
            email,
            password
        }

        const res = await axios.post('http://localhost:8080/auth/login', data, { withCredentials: true });

        console.log(res);

        if (res.status == 201) {
            localStorage.setItem('accessToken', res.data)
            navigate('/Home')
        }

        if (res.status !== 201) {
            setError('Napaka v podatkih');
        }
    }

    return (
        <>

            <h2>{error}</h2>

<div className="container-sm"> <form onSubmit={submit} >
    <img className="mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

    <div className="form-floating">
        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
               onChange={(e) => setEmail(e.target.value)}/>
        <label htmlFor="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
               onChange={(e) => setPassword(e.target.value)}/>
        <label htmlFor="floatingPassword">Password</label>
    </div>

    <div className="checkbox mb-3">
        <label>
            <input type="checkbox" value="remember-me"/> Remember me
        </label>
    </div>
    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    <p className="mt-5 mb-3 text-muted">&copy; Neki text</p>
</form></div>

        </>
    )
}

export default Login;