import React from 'react'
import "./register.css"

const registerURL = "http://localhost:5000/register";

export default function Register() {
    return (
        <>
            <div className="bg-black flex flex-row justify-center items-center">
                <div className="bg-background border-radius-10 ">
                    <div className='flex flex-col justify-center items-center'>
                        <p className="text-register">Register</p>
                    </div>
                    <div>
                        <p className="text-username set-margin-left">Username</p>
                        <input className="input-username set-margin-left" type="text" placeholder="username" onChange={(event) => { setUsername(event.target.value) }}/>
                    </div>
                    <div>
                        <p className="text-password set-margin-left">Password</p>
                        <input className="input-password set-margin-left" type="password" placeholder="Password" onChange={(event) => { setPassword(event.target.value) }}/>
                    </div>
                    <div>
                        <p className="text-firstname set-margin-left">First name</p>
                        <input className="input-firstname set-margin-left" type="text" placeholder="firstname" onChange={(event) => { setFirstName(event.target.value) }}/>
                    </div>
                    <div>
                        <p className="text-lastname set-margin-left">Last name</p>
                        <input className="input-lastname set-margin-left" type="text" placeholder="lastname" onChange={(event) => { setLastName(event.target.value) }}/>
                    </div>
                    <div>
                        <p className="text-email set-margin-left">E-mail</p>
                        <input className="input-email set-margin-left" type="text" placeholder="email" onChange={(event) => { setEmail(event.target.value) }}/>
                    </div>
                    <div className="flex flex-col justify-center items-center margin-top-button">

                    <button className="button-register" onClick={Register}>Register</button>
                    </div>
                </div>
            </div>
        </>
    )
}