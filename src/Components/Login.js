import React, {Component} from "react";
import { Button, Container, Grid, TextField} from '@mui/material';
import { Link } from 'react-router-dom';

export default class Login extends Component {
    state = {
        email:'',
        password:''
    }
    render(){
        const {email, password} = this.state
        return(
            <Container>
                <Grid container style={{justifyContent:'center'}}>
                <Grid xs="4">
                    <h2>Halaman Login</h2>
                    <TextField fullWidth margin="dense" variant="outlined" size="small" value={email} label="Email" required />
                    <TextField fullWidth margin="dense" variant="outlined" size="small" value={password} label="Password" required />
                    <Button fullWidth variant="conained" color="primary">Login</Button>
                    <p>Belum punya akun ?<Link to="/registrasi"> Sign Up</Link></p>
                </Grid>
                </Grid>
            </Container>
        )
    }
};

