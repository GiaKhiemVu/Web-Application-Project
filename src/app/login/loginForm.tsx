import { Button, Card, FormControl, Input, InputLabel, Link } from '@mui/material';
import React, { useState } from 'react';
import Iconify from '../component/Iconify';
import UserLoginData from '../type/user';

type SubmitFunction = (userData: UserLoginData) => void;

interface LoginFormProps {
  submit: SubmitFunction;
}

const LoginForm: React.FC<LoginFormProps> = ({ submit }) => {
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        submit(new UserLoginData(account, password))
    };

    return (
        <form 
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} 
            onSubmit={handleSubmit}
        >
            <Card sx={{display: 'flex', flexDirection: 'column', padding:"20px", border:2, borderRadius:'20px', height: '400px', width: '300px'}}>
                <h1 style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Login</h1>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Iconify icon="mdi:account-outline" sx={{border: 1, borderRadius:'50px', width: '2em', height: '2em',
                    marginTop: '10px', marginRight: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center',}}/>
                    <FormControl>
                        <InputLabel htmlFor="accountInput">Account</InputLabel>
                        <Input 
                            id="accountInput" 
                            required
                            value={account}
                            onChange={(e) => setAccount(e.target.value)}
                        />
                    </FormControl><br/>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', paddingTop: '10px' }}>
                    <Iconify icon="material-symbols:key-outline" sx={{border: 1, borderRadius:'50px', width: '2em', height: '2em',
                    marginTop: '10px', marginRight: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center',}}/>
                    <FormControl>
                        <InputLabel htmlFor="passwordInput">Password</InputLabel>
                        <Input 
                            id="passwordInput" 
                            type="password" 
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FormControl><br/>
                </div>
                <Button 
                    variant='contained' 
                    sx={{bgcolor: 'black', margin: '40px'}} 
                    type='submit'
                >
                    Submit
                </Button><br/>
                <div style={{ marginTop: 'auto', marginLeft: 'auto' }}>
                    <Link sx={{textDecoration: 'none', }}>Forgot your password?</Link>
                </div>
            </Card>
        </form>
    );
};

export default LoginForm;