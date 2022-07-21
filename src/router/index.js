import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectPage from '../components/ProtectPage';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
            path='/login'
            element={<Login />}
        >            
        </Route>
        <Route 
            path='/register'
            element={<Register />}
        >            
        </Route>
        <Route 
            path='/' 
            element={
              <ProtectPage>
                <Home />
              </ProtectPage>
          }
        >
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Router