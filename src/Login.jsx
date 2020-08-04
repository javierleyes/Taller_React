import React, { useState } from 'react'
import axios from 'axios'

const API_LOGIN = 'https://reqres.in/api/login'

const Login = () => {

    // Hooks
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    })

    const [submitted, setSubmitted] = useState(false)

    const [alertLogin, setAlertLogin] = useState({
        status: "",
        msg: ""
    })

    const handleClick = async () => {
        setSubmitted(true)
        if (inputs.email && inputs.password) {
            try {
                const response = await axios.post(API_LOGIN, inputs)
                setAlertLogin({
                    status: "success",
                    msg: "Login Exitoso"
                })
            } catch (error) {
                setAlertLogin({
                    status: "danger",
                    msg: "Algo esta mal"
                })
                console.log(error)
            }
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        console.log("name", name, "value", value);
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    return (
        <div>
            <div className="row">
                {submitted && <div className={`alert alert-${alertLogin.status}`} role="alert">
                    {alertLogin.msg}
                </div>}
            </div>
            <div className="row">
                <div className='form-group'>
                    <label>Email: </label>
                    <br></br>
                    <input onChange={handleChange} name='email'></input>
                    {submitted && !inputs.email && <small>Te falto el email</small>}
                </div>
            </div>
            <div className="row">
                <div className='form-group'>
                    <label>Password: </label>
                    <br></br>
                    <input type="password" onChange={handleChange} name='password'></input>
                    {submitted && !inputs.password && <small>Te falto el password</small>}
                </div>
            </div>
            <div className="row">
                <button onClick={handleClick}>Login</button>
            </div>
        </div>
    )
}

export default Login
