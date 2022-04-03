import React from "react";
import axios from "axios";
import Context from "../../../Context";

export default function ListaHabitos(){
    const [obj, setObj] = React.useState([]);
    const context = React.useContext(Context);
    React.useEffect(() => {
        let token = context.userObj.token;
        let config = {
            headers:{
                'Authorization':`Bearer ${token}`
            }
        }
        let promisse = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config);
        promisse.then((response) => setObj(response.data));
    }, []);

    function Habitos(){
        return(
            <div>
                {obj.map(habito => {
                    return(
                        <Habito name={habito.name}/>
                    )
                })}
            </div>
        )
    }

    function Habito({ name }){
        return(
            <div>
                <h1>{name}</h1>
            </div>
        )
    }
    console.log(obj);
    if(obj.length === 0){
        return(
            <h1>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h1>
        )
    } else {
        return(
            <Habitos />
        )
    }
}