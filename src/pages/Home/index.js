import { Typography } from '@mui/material'
import React from 'react'
import Layout from '../../components/Layout'

import maintaine from '../../assets/img/maintenance.png'
import { Box } from '@mui/system'

import SettingsIcon from '@mui/icons-material/Settings';

import style from './index.module.css'

const Home = () => {
  return (
      <Layout>
        <Box sx={{display: 'block', width:'100%', margin:'0px auto'}}>
          <Box sx={{display: 'flex', width:'100%', justifyContent:'center'}} > 
            <img src={maintaine} alt='error' />
          </Box>          
          <Typography variant='h4' sx={{textAlign:'center', marginTop:'20px', fontWeight:'bold'}}>            
              S<SettingsIcon fontSize="large" className={style.rotasi}/>rry, the website is still under development 
            <SettingsIcon fontSize="large" className={style.rotasi}/>
          </Typography>
        </Box>
      </Layout>
  )
}

export default Home