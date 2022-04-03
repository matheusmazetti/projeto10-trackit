import React from "react";
import axios from "axios";
import Context from "../../../Context";
import * as S from './ListaHabitosStyle';

export default function ListaHabitos({ reload }){
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
    }, [context.userObj.token, reload]);

    function Habitos(){
        return(
            <div>
                {obj.map(habito => {
                    return(
                        <Habito name={habito.name} days={habito.days} />
                    )
                })}
            </div>
        )
    }

    function Habito({ name, days }){
        return(
            <S.Content>
                <h1>{name}</h1>
                <S.Buttons>
                <button className={(days.includes(0))?'selecionado':''} >D</button>
                <button className={(days.includes(1))?'selecionado':''} >S</button>
                <button className={(days.includes(2))?'selecionado':''} >T</button>
                <button className={(days.includes(3))?'selecionado':''} >Q</button>
                <button className={(days.includes(4))?'selecionado':''} >Q</button>
                <button className={(days.includes(5))?'selecionado':''} >S</button>
                <button className={(days.includes(6))?'selecionado':''} >S</button>
                </S.Buttons>
            </S.Content>           
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