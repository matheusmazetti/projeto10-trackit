import Header from "./Header/Header";
import React from 'react';
import Content from "./Content/Content";

export default function Habitos({ token, image }){

    return(
        <>
            <Header image={image} />
            <Content />
        </>
    )
}