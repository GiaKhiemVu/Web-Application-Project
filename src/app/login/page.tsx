"use client"
import React, { useState } from 'react';
import LoginForm from './loginForm';
import { UserLoginData } from '../../type/user';
import { login } from '@/app/api/api';

const Login = () => {
    const [user, setUser] = useState(new UserLoginData(null, null))

    const updateUser = async (userData: UserLoginData) => {
        setUser(userData)
        await login(user).then((response) => console.log(response))
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <LoginForm submit={updateUser} />
        </div>
    )
}

export default Login;