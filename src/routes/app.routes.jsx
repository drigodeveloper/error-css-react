import { Routes, Route } from "react-router-dom";

import { New } from "../pages/new";
import { Home } from "../pages/home";
import { Profile } from "../pages/profile";
import { Details } from "../pages/Details";

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/new" element={<New/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/details/:id" element={<Details/>}/>
        </Routes>
    )
}