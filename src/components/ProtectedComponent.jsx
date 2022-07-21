import React, {useEffect} from 'react';

import {useNavigate} from 'react-router-dom';

import {auth} from '../authentication/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const ProtectedComponent = ({children})=>{
    const navigate= useNavigate();
    const [user, isLoading] = useAuthState(auth);

    useEffect(()=>{
        if(!user){
            navigate('/login');
            return;
        }
    }, [user, navigate]);
    if(isLoading){
        return false;
    }else{
        return children;
    }
}

export default ProtectedComponent;