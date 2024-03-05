import { Button, Card, FormControl, Input, InputLabel, Link } from '@mui/material';
import React, { useState } from 'react';
import { FormIconify } from '../../component/Iconify';
import { UserLoginData } from '../../type/user';
import { loginRoute } from '../../route';

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
                    <FormIconify icon="mdi:account-outline"/>
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
                    <FormIconify icon="material-symbols:key-outline"/>
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
                <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'row'}}>
                    <Link href={loginRoute.registerPage} sx={{textDecoration: 'none', marginRight: 'auto' }}>Register</Link>
                    <Link href={loginRoute.recoverPage} sx={{textDecoration: 'none', marginLeft: 'auto' }}>Forgot password</Link>
                </div>
            </Card>
        </form>
    );
};

export default LoginForm;