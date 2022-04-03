import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';

import Login from "./Login/Login";
import Cadastro from "./Cadastro/Cadastro";
import Habitos from "./Habitos/Habitos";
import Context from "./Context";
import Hoje from "./Hoje/Hoje";

export default function App(){
    const [userObj, setUserObj] = React.useState({});
    return(
        <Context.Provider value={{userObj, setUserObj}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/habitos" element={<Habitos />} />
                    <Route path="/hoje" element={<Hoje />} />
                </Routes>
            </BrowserRouter>
        </Context.Provider>
    )
}