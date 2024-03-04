"use client"
import { Box, Button, Card, FormControl, Input, InputLabel, Link } from '@mui/material';
import React, { useState } from 'react';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';

const Login = () => {
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Account:", account);
        console.log("Password:", password);
    };

    return (
        <form 
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} 
            onSubmit={handleSubmit}
        >
            <Card sx={{width: "fit-content", padding:"20px", border:2, borderRadius:'20px'}}>
                <h1 style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Login</h1>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{border: 1, borderRadius:'50px', width: '2em', height: '2em', marginTop: '10px', marginRight: '10px', 
                    display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
                        <PermIdentityOutlinedIcon />
                    </Box>
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
                    <Box sx={{border: 1, borderRadius:'50px', width: '2em', height: '2em', marginTop: '10px', marginRight: '10px', 
                        display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
                            <KeyOutlinedIcon/>
                    </Box>
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
                    sx={{top: '10px', left: '150px', bgcolor: 'black', margin: '10px'}} 
                    type='submit'
                >
                    Submit
                </Button>
                <Link style={{paddingTop: '20px'}}>Forgot your password?</Link>
            </Card>
        </form>
    );
};

export default Login;