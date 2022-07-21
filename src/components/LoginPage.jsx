import React from 'react'
import { Button, TextField, Typography} from '@mui/material'
import '../styles/style.css'

const Login = () => {
    return (
        <>
        <div className="login-style">
            <h1>Login Page</h1>
                <TextField id="username" label="Username" variant="filled" sx={{paddingBottom: '1em'}}/>
                <TextField id="password" label="Password" variant="filled" sx={{paddingBottom: '1em'}}/>
                <Button variant="contained" >Submit</Button>
                <Typography>Not registered yet? <a href='#'>Create an account</a></Typography>
        </div>
            
        </>
    )
}

export default Login