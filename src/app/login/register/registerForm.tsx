import { Box, Button, Card, FormControl, Input, InputLabel, Link, Typography } from '@mui/material';
import React, { useState } from 'react';
import { FormIconify } from '../../../component/Iconify';
import { UserRegisterData } from '../../../type/user';
import { loginRoute } from '../../../route';

type SubmitFunction = (userData: UserRegisterData) => void;

interface LoginFormProps {
  submit: SubmitFunction;
}

const RegisterForm: React.FC<LoginFormProps> = ({ submit }) => {
    const [account, setAccount] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [name, setName] = useState({firstName: '', lastName: ''})
    const [email, setEmail] = useState('')
    const [error, setError] = useState({email: false, password: false, rePassword:false})
    const [isLoading, setIsLoading] = useState(false)

    const verifyUserData = async () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        const newError = {...error}
        let isError = false

        if(emailRegex.test(email)) {
            newError.email = false 
        } else {
            newError.email = true
            isError = true 
        }

        if(password.length < 8){
            newError.password = true
            isError = true 
        } else {
           newError.password = false
        }

        if(password === rePassword){
            newError.rePassword = false
        } else {
            newError.rePassword = true
            isError = true 
        }
        setError(newError)

        return isError
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        setIsLoading(true)
        event.preventDefault()
    
        let isError = await verifyUserData()

        if(isError){
            setIsLoading(false)
            return
        }
        
        const userData = new UserRegisterData(account, password, name.firstName, name.lastName, email)

        submit(userData)

        setIsLoading(false)
    };

    return (
        <form 
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px'}} 
            onSubmit={handleSubmit}
        >
            <Card sx={{display: 'flex', flexDirection: 'column', padding:"30px", border:2, borderRadius:'20px', height: '550px', width: '500px'}}>
                <h1 style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Register</h1>
                <div style={{ display: 'flex', alignItems: 'center', flexFlow: 'row' }}>
                    <FormIconify icon="mdi:account-outline"/>
                    <Box sx={{ paddingRight: '10px'}}>
                        <FormControl margin='normal'>
                            <InputLabel htmlFor="FNameInput">First Name</InputLabel>
                            <Input 
                                id="FNameInput" 
                                required
                                value={name.firstName}
                                onChange={(e) => setName({firstName: e.target.value ,lastName: name.lastName})}
                            />
                        </FormControl>
                    </Box>
                    <Box sx={{ paddingRight: '10px'}}>
                        <FormControl margin='normal'>
                            <InputLabel htmlFor="LNameInput">Last Name</InputLabel>
                            <Input 
                                id="LNameInput" 
                                required
                                value={name.lastName}
                                onChange={(e) => setName({firstName: name.firstName, lastName:e.target.value})}
                            />
                        </FormControl>
                    </Box>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', paddingTop: '10px' }}>
                    <FormIconify icon="ic:outline-email"/>
                    <Box sx={{ paddingRight: '10px'}}>
                        <FormControl margin='normal'>
                            <InputLabel htmlFor="EmailInput">Email</InputLabel>
                            <Input 
                                id="EmailInput"  
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                error={error.email}
                            />
                            {error.email && <Typography variant="caption" color="error">Please enter a valid email address.</Typography>}
                        </FormControl>
                    </Box>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', paddingTop: '10px' }}>
                    <FormIconify icon="icon-park-outline:edit-name"/>
                    <Box sx={{ paddingRight: '10px'}}>
                        <FormControl margin='normal'>
                            <InputLabel htmlFor="accountInput">Account</InputLabel>
                            <Input 
                                id="accountInput"
                                required
                                value={account}
                                onChange={(e) => setAccount(e.target.value)}
                            />
                        </FormControl>
                    </Box>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', paddingTop: '10px' }}>
                    <FormIconify icon="material-symbols:key-outline" />
                    <Box sx={{ paddingRight: '10px', maxWidth:"200px"}}>
                        <FormControl margin='normal'>
                            <InputLabel htmlFor="passwordInput">Password</InputLabel>
                            <Input 
                                id="passwordInput"
                                type="password" 
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                error={error.password}
                            />
                        </FormControl>
                        {error.password && <Typography variant="caption" color="error">8 characters required.</Typography>}
                    </Box>
                    <Box sx={{ paddingRight: '10px'}}>
                        <FormControl margin='normal'>
                            <InputLabel htmlFor="rePasswordInput">Rewrite Password</InputLabel>
                            <Input 
                                id="rePasswordInput"
                                type="password" 
                                required
                                value={rePassword}
                                onChange={(e) => setRePassword(e.target.value)}
                            />
                        </FormControl>
                        {error.rePassword && <Typography variant="caption" color="error">Different with your password</Typography>}
                    </Box>
                </div>
                <Button 
                    variant='contained' 
                    sx={{bgcolor: 'black', margin: '40px'}} 
                    type='submit'
                >
                    {isLoading?<FormIconify icon='line-md:loading-twotone-loop' style={{border: 0}}/>:'Submit'}
                </Button><br/>
                <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'row'}}>
                    <Link href={loginRoute.loginPage} sx={{textDecoration: 'none', marginLeft: 'auto' }}>Already have account</Link>
                </div>
            </Card>
        </form>
    );
};

export default RegisterForm;