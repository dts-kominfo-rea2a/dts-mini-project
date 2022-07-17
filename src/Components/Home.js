import React, {Component} from 'react';
import { Button, Container, Paper} from '@mui/material';

export default class Home extends Component {
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

