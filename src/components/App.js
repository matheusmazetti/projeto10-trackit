import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';

import Login from "./Login/Login";
import Cadastro from "./Cadastro/Cadastro";
import Habitos from "./Habitos/Habitos";

export default function App(){
    const [token, setToken] = React.useState('');
    const [image, setImage] = React.useState('');
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login callback={(token, image) => {
                    setToken(token)
                    setImage(image)
                    }} />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/habitos" element={<Habitos token={token} image={image} />} />
            </Routes>
        </BrowserRouter>
    )
}