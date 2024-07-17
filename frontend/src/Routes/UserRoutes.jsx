import React from "react";
import { Route } from "react-router-dom";
import HomeScreen from "../Components/User/HomeScreen";
import Signup from "../Components/User/Signup";
import Login from "../Components/User/Login";


const UserRoutes=(
    <>
    <Route path="/" element={<HomeScreen/>}/>
    <Route path="/signup" element={<Signup/>}  />
    <Route path="/login"   element={<Login/>} />

   
    </>
)

export default UserRoutes