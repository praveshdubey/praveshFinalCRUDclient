import React from 'react'
import {AppBar, Toolbar, styled } from '@mui/material'; 
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
background-color: #012b23 ;
color: #ffffff !important;
`;

const Tabs = styled(NavLink)`
    font-size: 20px;
    margin:20px;
    text-decoration:none;
    color:white;

`

const Navbar =()=>{
    return(
     <Header position='static' >
         <Toolbar>
        <Tabs to='/'   style={{ color:"#ffffff"}} >LUCKY</Tabs>
        <Tabs to='/all' style={{ color:"#ffffff"}} >Dashboard</Tabs>
        <Tabs to='/add' style={{ color:"#ffffff"}} >Add User</Tabs>
         </Toolbar>
     </Header>
    ) 
}
export default Navbar;