import { useState } from "react"
import React,{useContext, useEffect, useState} from 'react'
import {Link, useNavigate,} from "react-router-dom";


function Register() {
    const navigate = useNavigate();
    const {success, loding, user} = useContext();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (success) {
            navigate("/")
        }
    }, [success]

    )
  return (
    <form className="form">
    <div>
    <div className="form-group">
    <label htmlFor="password">password</label>
    <input type="email" className="form-control" placeholder="example@gmail.com" value={email}  />
    </div>
    <button type="submit">submit</button>
    <div className="row">
    I dont have an account
    <Link to="/regiter">register</Link>
    </div>
    </div> 
    </form>
  )
}

export default Login;
