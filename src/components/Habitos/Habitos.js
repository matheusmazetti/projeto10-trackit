import Header from "./Header/Header";
import React from 'react';

export default function Habitos({ token, image }){
    //const [obj, setObj] = React.useState([]);

    //React.useEffect(() => {
        //let config = {
            //headers:{
                //"Authorization":`Bearer ${token}`
            //}
       // }
   // }, [])
    return(
        <>
            <Header image={image} />
        </>
    )
}