import React, {Component} from 'react';
import { Button, Container, Paper} from '@mui/material';
import {firebaseAuthentication } from '../config/firebase' 

export default class Home extends Component {
    componentDidMount(){
        firebaseAuthentication.onAuthStateChanged((user) => {
            if(!user){
                this.props.history.push('/login');
            }
        })
    }
    render(){
        return(
            <Container>
                <Paper>
                    <Button>Logout</Button>
                    <h1>Home</h1>
                </Paper>
            </Container>
        )
    }
};

