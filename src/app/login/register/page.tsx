'use client'
import React, { useState } from 'react';
import RegisterForm from './registerForm';
import { UserRegisterData } from '@/type/user';
import { loginRoute } from '@/route';

function Register() {
    const [userData, setUserData] = useState(new UserRegisterData)

    const handleSubmit = (userRegisterData: UserRegisterData) => {
        setUserData(userRegisterData)

        window.location.href = loginRoute.loginPage;
        console.log(userData)
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',}}>
            <RegisterForm submit={handleSubmit}/>
        </div>
    );
}



export default Register;