"use client"
import React, { useState } from 'react';
import LoginForm from './loginForm';
import { UserLoginData } from '../../type/user';

const Login = () => {
    const [user, setUser] = useState(new UserLoginData(null, null))

    const updateUser = (userData: UserLoginData) => {
        setUser(userData)
        console.log(userData)
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <LoginForm submit={updateUser} />
        </div>
    )
}

export default Login;