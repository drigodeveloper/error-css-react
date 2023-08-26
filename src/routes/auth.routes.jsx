import { Routes, Route } from "react-router-dom";

import { Signin } from "../pages/signin";
import { Signup } from "../pages/signup";


export function AuthRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Signin/>}/>
            <Route path="/signup" element={<Signup/>}/>
        </Routes>
    )
}