import React, { Component } from 'react'
import { Navigate, Routes, Route } from 'react-router-dom';
import Connect from '../pages/Connect';
import Main from '../pages/Main';
import Registre from '../pages/Registre';





function Layout({userConnected,setUserConnected,myStorage}) {
        return (
            <Routes >
               {console.log(userConnected)} 
            {userConnected && <Route path="/" element={<Main  userConnected={userConnected} setUserConnected={setUserConnected}/>} />}
            {!userConnected &&  <Route path="/login" element={<Connect myStorage={myStorage} setUserConnected={setUserConnected}/>} />}
            {!userConnected &&   <Route path="/register" element={<Registre myStorage={myStorage} setUserConnected={setUserConnected}/>} />}
            {!userConnected &&   <Route path="*" element={<Navigate to="/login" />} />}
            {userConnected &&   <Route path="*" element={<Navigate to="/" />} />}
           
           
           
    </Routes>
        )
    }

export default Layout